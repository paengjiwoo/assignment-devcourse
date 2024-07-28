import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText: string;
  message: string;
};

const Error = () => {
  const error = useRouteError() as RouteError;

  return(
    <div>
      <div>Error!</div>
      <div>다음과 같은 에러가 발생했습니다!</div>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

export default Error;