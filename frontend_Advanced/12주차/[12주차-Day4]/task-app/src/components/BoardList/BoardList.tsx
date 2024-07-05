import React, { FC, useState, useRef } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import SideForm from './SideForm/SideForm';
import { FiLogIn, FiPlusCircle } from 'react-icons/fi';
import { addButton, addSection, boardItem, boardItemActive, container, title } from './BoardList.css';
import clsx from 'clsx';
import { GoSignOut } from 'react-icons/go';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { app } from '../../firebase';
import { removeUser, setUser } from '../../store/slices/userSlice';
import { useAuth } from '../../hooks/useAuth';

type TBoardListProps = {
  activeBoardId : string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
}

const BoardList:FC<TBoardListProps> = ({
  activeBoardId,
  setActiveBoardId
}) => {
  const dispatch = useTypedDispatch();
  const { isAuth } = useAuth();

  const { boardArray } = useTypedSelector(state => state.boards);
  const [ isFormOpen, setIsFormOpen ] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
    .then(userCredential => {
      dispatch(setUser({
        email: userCredential.user.email,
        id: userCredential.user.uid
      }))
    })
    .catch(err => console.log(err))
  };

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      dispatch(removeUser())
    })
    .catch(err => console.log(err))
  };

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return(
    <div className={container}>
      <div className={title}>
        게시판
      </div>

      {boardArray.map((board, index) => (
        <div key={board.boardId} 
          onClick={() => setActiveBoardId(board.boardId)}
          className={clsx(
          {
            [boardItemActive]:boardArray.findIndex(b => b.boardId === activeBoardId) === index,
          },
          {
            [boardItem]:boardArray.findIndex(b => b.boardId === activeBoardId) !== index,
          }
        )}>
          <div>
            {board.boardName}
          </div>
        </div>
      ))}
      <div className={addSection}>
        {
          isFormOpen ? 
            <SideForm setIsFormOpen={setIsFormOpen} inputRef={inputRef} />
            :
            <FiPlusCircle className={addButton} onClick={handleClick}/>
        }
        {
          isAuth
          ? <GoSignOut className={addButton} onClick={handleSignOut} />
          :<FiLogIn className={addButton} onClick={handleLogin} />
        }

      </div>

    </div>
  );
}

export default BoardList;