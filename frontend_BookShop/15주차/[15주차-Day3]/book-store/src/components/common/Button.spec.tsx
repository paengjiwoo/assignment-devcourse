import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';
import { BookStoreThemeProvider } from '../../context/ThemeContext';

describe("Button 컴포넌트 테스트", () => {
  it('렌더를 확인', () => {
    // 렌더
    render(
      <BookStoreThemeProvider>
        <Button size="large" schema="primary">버튼</Button>
      </BookStoreThemeProvider>
    ); 
    // 확인
    expect(screen.getByText('버튼')).toBeInTheDocument();
  });

  it('size props 적용', () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Button size="large" schema="primary">버튼</Button>
      </BookStoreThemeProvider>
    );
    expect(screen.getByRole('button')).toHaveStyle({
      fontSize: "1.5rem"
    });
  });
});