import Header from '../components/common/Header'
import Footer from '../components/common/Footer';
import Title from '../components/common/Title';
import Button from '../components/common/Button';
import InputText from '../components/common/InputText';

const Home = () => {
  return(
    <>
      <Title size="large" color="background">
        제목 테스트
      </Title>
      <InputText placeholder='여기에 입력하세요' />
      <Button size="large" schema="normal">버튼 테스트</Button>
      <div>BookStore</div>
    </>
  );
}

export default Home;