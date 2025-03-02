import { useState } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  style?: any;
}

const Button = ({ children, onClick, type, loading, style }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ButtonContainer
      style={style}
      $isHovered={isHovered}
      onClick={() => {
        if (!loading && onClick) onClick();
      }}
      type={type}
      onMouseEnter={() => {
        if (!loading) setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {loading ? 'Envoi en cours...' : children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button<{ $isHovered: boolean }>`
  font-family: 'Wix Madefor Display', sans-serif;
  font-weight: ${({ $isHovered }) => ($isHovered ? 800 : 400)};
  font-size: 11px;
  border-width: 0;
  padding: 10px 20px;
  letter-spacing: 5px;
  width: 100%;
  max-width: 300px;
  cursor: pointer;
  background-color: ${({ $isHovered }) => ($isHovered ? '#ffffff' : '#000000')};
  border: 1px solid #000000;
  /* border-radius: 8px; */
  color: ${({ $isHovered }) => ($isHovered ? '#000000' : '#ffffff')};

  @media (max-width: 1180px) {
    max-width: 300px;
  }
`;
