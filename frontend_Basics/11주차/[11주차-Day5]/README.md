# 11주차_Day5
React 기본

# 수행 내용
- props
- 모달 대화상자 구현 (react-bootstrap)

<br>

# props
컴포넌트로 데이터 전달

## Props 타입 정의
```tsx
interface Props {
  weather : string;
  // 컴포넌트의 자식 요소
  children : React.ReactNode;
}
```
- 컴포넌트의 자식 요소는 컴포넌트 태그 안에 작성해서 전달
```tsx
<MyWeather weather="흐림">일기예보</MyWeather>
{/* '일기예보' 가 자식 요소*/}
```

## 함수형 컴포넌트에서 props 사용

```tsx
const MyWeather : React.FC<Props> = ({children, weather}) => {
  // 구조 분해 할당
  // const {children, weather} = props;

  return (
    <div>
      <h2>{children}</h2>
      <div>오늘의 날씨는 {weather} 입니다.</div>
    </div>
  )
};
```

## 클래스형 컴포넌트에서 props 사용
```tsx
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
```

<br>

# 프론트엔드 공부 방향
- 프로그래밍 기초 개념 및 원리 이해 중심 학습
  - 항상 의문을 가지는 학습 하기
- 개발된 기술 하나를 습득하기 보다 패턴을 이해하기
- 객체지향 철학에 늘 관심을 갖기