import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";

// TypedUseSelectorHook<RootState>을 통해 동일한 형태로 매핑
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>();

// const logger = useSelector((state: RootState) => state.logger);
// const logger = useTypedSelector((state) => state.logger);
