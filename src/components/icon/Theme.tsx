import { FC, useContext } from 'react';
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';

import { IconProps } from './types/IconProps';

import { ThemeStateContext } from '@/app/providers/ThemeProvider/ThemeContext';

const SIZE = 16;

export const Theme: FC<IconProps> = ({ className, onClick }) => {
  const { theme } = useContext(ThemeStateContext);

  return (
    <>
      {theme === 'light' ? (
        <AiOutlineMoon
          size={SIZE}
          onClick={onClick}
          className={className}
        />
      ) : (
        <AiOutlineSun
          size={SIZE}
          onClick={onClick}
          className={className}
        />
      )}
    </>
  );
};
