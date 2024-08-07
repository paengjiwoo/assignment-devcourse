import { msw, httpResponse, http } from "msw";
import { BookReviewItem } from "../models/book.model";
import { faker } from "@faker-js/faker"

const mockReviewsData: BookReviewItem[] = Array.from({length: 8}).map((_, Index) => ({
  id: Index,
  userName: faker.person.firstName(),
  content: faker.lorem.paragraph(),
  createdAt: faker.date.past().toISOString(),
  score: faker.helpers.rangeToNumber({min: 1, max: 5})
}));

export const reviewsById = http.get("http://localhost:9999/reviews/:bookId",
() => {
  return httpResponse.json(mockReviewsData, {
    status: 200,
  })
});