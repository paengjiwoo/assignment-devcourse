import React from 'react';
import logo from './logo.svg';
import './App.css';

{/* 
  작성자 : 팽지우
  작성일 : 2024.06.19
  내용 : React 프로젝트 생성
*/}

function App() {
  let message : string = '테스트';
  const style = {
    // camelcase로 사용
    color: 'white',
    fontSize: '40px',
    fontWeight: 'bold'
  }

  return (
    <div className="App">
      <header className="container">
        {/* 주석을 작성합니다 */}
        <div style={style} >{message}!!</div>
      </header>
    </div>
  );
}

export default App;
