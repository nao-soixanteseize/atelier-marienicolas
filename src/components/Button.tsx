import { useState } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, onClick, type }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ButtonContainer
      $isHovered={isHovered}
      onClick={onClick}
      type={type}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button<{ $isHovered: boolean }>`
  font-family: 'Wix Madefor Display', sans-serif;
  font-weight: ${({ $isHovered }) => ($isHovered ? 800 : 400)};
  font-size: 16px;
  border-width: 0;
  padding: 10px 0;
  letter-spacing: 5px;
  width: 100%;
  max-width: 300px;
  cursor: pointer;
  background-color: ${({ $isHovered }) =>
    $isHovered ? '#000000' : 'transparent'};
  border: 1px solid #000000;
  border-radius: 8px;
  color: ${({ $isHovered }) => ($isHovered ? '#ffffff' : '#000000')};

  @media (max-width: 1280px) {
    max-width: unset;
  }
`;