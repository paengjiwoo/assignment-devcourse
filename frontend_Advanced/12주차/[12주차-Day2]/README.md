# 12주차_Day2
TaskApp 프로젝트 

# 수행 내용
- boardList 컴포넌트 구현 (게시판 목록)
  - store에 저장된 초기 구성값 설정
  - board 등록하는 SideForm 구현
- 게시판 생성 로직 boardSlice에 구현
- 로그 생성 로직 loggerSlice에 구현

- listContainer 컴포넌트 구현 (게시글 목록)
  - 게시글 리스트 List, ActionBtton 컴포넌트 함께 구현
  - list 삭제 로직 boardSlice에 추가
  - task detail modal로 띄우기 위한 로직 modalSlice, boardSlice에 추가
  - 개별 게시글 Task 컴포넌트 구현

- Action Button 컴포넌트 생성
- DropDownForm 컴포넌트 생성
  - 새로운 list 및 task 생성 로직 boardSlice.actions 작성
- 스타일링

<br>

# input 이벤트
[React 공식 문서](https://ko.legacy.reactjs.org/docs/events.html#focus-events) <br>

## onFocus
엘리먼트가 포커스 될 때 호출<br>
e.g. input 영역을 선택했을 때 호출

## onBlur
엘리먼트에서 포커스가 사라졌을 때 호출 <br>
e.g. 포커스 된 input 외의 영역을 선택했을 때 호출

<br>

# SideForm 컴포넌트 : onClick vs onBlur 순서

## 문제 상황
SideForm 컴포넌트는 board의 추가 생성을 담당하는 컴포넌트로, `onClick`을 통해서는 새 board 내용 추가를, `onBlur`를 통해서는 board 추가 후 페이지 전환을 시도하였다.
그러나, `onClick`을 통해 실행되었어야 할 메서드가 실행되지 못한 채로 `onBlur`에 지정된 페이지 전환이 실행되어 원치 않는 결과가 출력되었다.

## 해결 방안
이벤트 핸들러의 작동 순서 상, `onBlur`가 `onClick`보다 먼저 실행되기에 발생한 문제였다. 따라서, `onBlur`보다 먼저 실행되는 `onMouseDown`메서드를 `onClick` 자리에 넣어주었다.
참고 : [[React] onclick 이벤트와 onblur 이벤트가 동시에 일어난다면 실행 순서가 어떻게 될까?](https://kang-ju.tistory.com/entry/click-%ED%9B%84%EC%97%90-blur-%EC%8B%A4%ED%96%89-%EC%8B%9C%ED%82%A4%EB%8A%94-%EB%B0%A9%EB%B2%95)
