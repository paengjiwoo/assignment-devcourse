import { Book, BookDetail } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface FetchBooksParams {
  category_id?: number;
  news?: boolean;
  currentPage?: number;
  limit: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
  const response = await httpClient.get<FetchBooksResponse>("/books", {
    params: params
  });

  try {
    return response.data;
  } catch (err) {
    return {
      books: [],
      pagination: {
        totalCount: 0,
        currentPage: 1
      }
    }
  }
}

export const fetchBook = async (BookId: string) => {
  const response = await httpClient.get<BookDetail>(`/books/${BookId}`);
  return response.data;
};

export const likeBook = async (BookId: number) => {
  const response = await httpClient.post(`/likes/${BookId}`);
  return response.data;
}

export const unlikeBook = async (BookId: number) => {
  const response = await httpClient.delete(`/likes/${BookId}`);
  return response.data;
}