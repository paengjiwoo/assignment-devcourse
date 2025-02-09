import { styled } from "styled-components";
import { buttonSchema, buttonSize } from "../../style/theme";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode,
  size: buttonSize,
  schema: buttonSchema,
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = ({children, size, schema, disabled, isLoading}: Props) => {
  return(
    <ButtonStyle 
      size={size} 
      schema={schema} 
      disabled={disabled} 
      isLoading={isLoading}
    >
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<Omit<Props, 'children'>>`
  font-size: ${({ theme, size}) => theme.button[size].fontSize};
  padding: ${({ theme, size}) => theme.button[size].padding};
  color: ${({ theme, schema}) => theme.buttonSchema[schema].color};
  background-color: ${({ theme, schema}) => theme.buttonSchema[schema].backgroundColor};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
`;

export default Button;