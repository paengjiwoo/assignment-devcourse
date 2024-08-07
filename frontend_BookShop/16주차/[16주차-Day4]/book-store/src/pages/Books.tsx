import React from 'react';
import Title from '../components/common/Title';
import styled from 'styled-components';
import BooksFilter from '../components/books/BooksFilter';
import BooksList from '../components/books/BooksList';
import BooksEmpty from '../components/books/BooksEmpty';
import Pagination from '../components/books/Pagination';
import BooksViewSwitcher from '../components/books/BooksViewSwitcher';
import { useBooks } from '../hooks/useBooks';
import Loading from '../components/common/Loading';

const Books = () => {
  const { books, pagination, isEmpty, isBooksLoading } = useBooks();
  
  return(
    <>
      <Title size="large">도서 검색 결과</Title>
      <BookStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>
        {isBooksLoading && <Loading />}
        {!isEmpty && books && (
          <BooksList books={books}/>
        )}
        {isEmpty && <BooksEmpty />}
        {!isEmpty && pagination && <Pagination pagination={pagination}/>}
      </BookStyle>
    </>
  );
}

const BookStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
`

export default Books;