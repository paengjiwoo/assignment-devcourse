import { setupWorker } from "msw/browser";
import { reviewsById } from "./review";
import { banners } from "./banner";

const handlers = [reviewsById, banners];

export const worker = setupWorker(...handlers);