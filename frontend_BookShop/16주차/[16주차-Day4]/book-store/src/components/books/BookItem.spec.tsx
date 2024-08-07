import React from 'react';
import { render, screen } from '@testing-library/react';
import BookItem from './BookItem';
import { BookStoreThemeProvider } from '../../context/ThemeContext';

const dummyBook: Book = {
  id: 1,
  title: "Dummy Book",
  img: 5,
  category_id: 1,
  form: "paperbook",
  isbn: "Dummy ISBN",
  summary: "Dummy Summary",
  detail: "Dummy Detail",
  author: "Dummy Author",
  pages: 100,
  contents: "Dummy Content",
  price: 10000,
  likes: 1,
  pubDate: "2024-07-20"
}

describe("BookItem", () => {
  it("렌더 여부", () => {
    const { getByText } = render (
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>
    )
    
    expect(getByText(dummyBook.title)).toBeInTheDocument();
  });
})