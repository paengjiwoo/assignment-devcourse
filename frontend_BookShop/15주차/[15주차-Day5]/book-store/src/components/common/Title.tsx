import React from 'react';
import styled from 'styled-components';
import { HeadingSize, ColorKey } from '../../style/theme';

interface Props {
  children: React.ReactNode;
  size: HeadingSize;
  color?: ColorKey
}

const Title = ({children, size, color}: Props) => {
  return(
    <TitleStyle size={size}>{children}</TitleStyle>
  );
}

const TitleStyle = styled.h1<Omit<Props, "children">>`
  font-size: ${({theme, size}) => theme.heading[size].fontSize},
  color: ${({ theme, color}) => color ? theme.color[color].fontSize : theme.color.primary}
`

export default Title;