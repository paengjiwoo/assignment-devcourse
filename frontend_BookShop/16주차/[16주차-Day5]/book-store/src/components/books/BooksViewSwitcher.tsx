import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { FaList, FaTh } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import { QUERYSTRING } from '../../constants/queryString';

const viewOptions = [
  {
    value: "list",
    icon: <FaList />
  },
  {
    value: "grid",
    icon: <FaTh />
  }
]

export type ViewMode = "grid" | "list";

const BooksViewSwitcher = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSwitch = (value: ViewMode) => {
    const newSearchParams = new URLSearchParams(searchParams);
  
    newSearchParams.set(QUERYSTRING.VIEW, value);
    setSearchParams(newSearchParams);
  }

  useEffect(() => {
    if (!searchParams.get(QUERYSTRING.VIEW)) {
      handleSwitch("grid");
    }
  }, [])

  return(
    <BookViewSwitcherStyle>
      {
        viewOptions.map((option) => (
          <Button 
            size="medium" 
            schema={searchParams.get(QUERYSTRING.VIEW) === option.value ? "primary" : "normal"}
            key={option.value} 
            onClick={() => handleSwitch(option.value as ViewMode)}>
            {option.icon}
          </Button>
        ))
      }
    </BookViewSwitcherStyle>
  );
}

const BookViewSwitcherStyle = styled.div`
  display: flex;
  gap: 8px;
  svg {
    fill: white;
  }
`

export default BooksViewSwitcher;