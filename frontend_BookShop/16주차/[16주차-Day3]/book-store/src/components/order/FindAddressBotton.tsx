import styled from 'styled-components';
import Button from '../common/Button';
import { useEffect } from 'react';

interface Props {
  onCompleted: (address: string) => void;
}

const script_url = '<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>';

const FindAddressBotton = ({ onCompleted }: Props) => {

  const handleOpen = () => {
    new window.daum.Postcode({
      oncomplete: function(data: any) {
        onCompleted(data.address as string)
      }
    }).open();
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = script_url;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    }
  }, []);

  return(
    <Button
      size="medium" 
      schema="normal"
      type="button"
      onClick={handleOpen}  
    >
      주소 찾기
    </Button>
  );
}

export default FindAddressBotton;