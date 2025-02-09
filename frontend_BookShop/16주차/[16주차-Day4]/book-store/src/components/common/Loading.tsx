import { FaSpinner } from "react-icons/fa";
import styled from "styled-components";

function Loading() {
  return (
    <LoadingStyle>
      <FaSpinner />
    </LoadingStyle>
  );
}

const LoadingStyle = styled.div`
  padding: 40px;
  text-align: center;

  @keyframs rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    width: 70px;
    height: 70px;
    fill: #ccc;
    animation: rotate 1s linear infinite;
  }
`;

export default Loading;