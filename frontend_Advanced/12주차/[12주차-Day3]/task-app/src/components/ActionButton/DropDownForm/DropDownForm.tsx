import React, { ChangeEvent, FC, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useTypedDispatch } from '../../../hooks/redux';
import { addList, addTask } from '../../../store/slices/boardsSlice';
import { v4 } from 'uuid';
import { addLog } from '../../../store/slices/loggerSlice';
import { buttons, button, input, listForm, taskForm, close } from './DropDownForm.css';

type TDropDownForm = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  boardId: string;
  listId: string;
  list?: boolean;
}

const DropDownForm: FC<TDropDownForm> = ({ setIsFormOpen, boardId, listId, list }) => {
  
  const dispatch = useTypedDispatch()

  const [text, setText] = useState<string>('');
  const formPlaceHolder = list ? "리스트의 제목을 입력하세요" : "일의 제목을 입력하세요";
  const buttonTitle = list ? "리스트 추가하기" : "일 추가하기"

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    if (text) {
      if (list) {
        dispatch(addList({
          boardId, 
          list: { listId: v4(), listName: text, tasks: []}
        }))
        dispatch(addLog({
          logId: v4(),
          logMessage: `리스트 생성하기: ${text}`,
          logAuthor: "User",
          logTimestamp: String(Date.now())
        }))
      } else {
        dispatch(addTask({
          boardId,
          listId,
          task: {
            taskId: v4(), 
            taskName: text, 
            taskDescription: "", 
            taskOwner: "User"
          }
        }))
        dispatch(addLog({
          logId: v4(),
          logMessage: `일 생성하기: ${text}`,
          logAuthor: "User",
          logTimestamp: String(Date.now())
        }))
      }
    }
  }

  return(
    <div className={list ? listForm : taskForm}>
      <textarea 
        className={input}
        value={text}
        autoFocus
        placeholder={formPlaceHolder}
        onChange={handleChange}
        onBlur={() => setIsFormOpen(false)}
      />
      <div className={buttons}>
        <button className={button} onMouseDown={handleButtonClick}>
          {buttonTitle}
        </button>
        <FiX className={close}/>
      </div>
    </div>
  );
}

export default DropDownForm;