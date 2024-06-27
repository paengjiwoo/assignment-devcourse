import React, {Component} from "react";

interface Props {
  weather : string;
  // 컴포넌트의 자식 요소
  children : React.ReactNode;
}

// 함수형 컴포넌트에서 props -----
// const MyWeather : React.FC<Props> = ({children, weather}) => {
//   // const {children, weather} = props;
  
//   return (
//     <div>
//       <h2>{children}</h2>
//       <div>오늘의 날씨는 {weather} 입니다.</div>
//     </div>
//   )
// };

// 클래스형 컴포넌트에서 props -----
class MyWeather extends Component<Props> {
  render() {
    const {children, weather} = this.props;
    return(
      <div>
        <h2>{children}</h2>
        <div>오늘의 날씨는 {weather} 입니다.</div>
      </div>
    )
  }
}

export default MyWeather;