import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface MenuItemProps {
  title: string;
  url?: string;
  onClick?: () => void;
}

const MenuItem = ({ title, url, onClick }: MenuItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Item
      $isActived={location.pathname === url}
      $isHovered={isHovered}
      style={{ cursor: 'pointer' }}
      onClick={() => {
        if (onClick) onClick();
        else if (url) navigate(url);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
    </Item>
  );
};

export default MenuItem;

const Item = styled.div<{ $isHovered: boolean; $isActived: boolean }>`
  position: relative;
  z-index: 10;
  font-family: 'Wix Madefor Display', sans-serif;
  font-weight: ${({ $isHovered, $isActived }) =>
    $isHovered || $isActived ? 800 : 400};
  font-size: 12px;
  letter-spacing: 3px;
  color: #000000;
`;
