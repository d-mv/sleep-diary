import { clsx } from 'clsx';
import { Button as MuiButton, Typography } from '@mui/material';

import './Button.css';

export interface ButtonProps {
  onClick: () => void;
  title: string;
  className?: string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'inherit';
  size?: 'small' | 'medium' | 'large';
  buttonVariant?: 'text' | 'outlined' | 'contained';
  titleVariant?: 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  titleColor?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'inherit' | string;
}

export function Button({
  onClick,
  color,
  title,
  size,
  className,
  buttonVariant,
  titleVariant,
  titleColor,
}: ButtonProps) {
  return (
    <MuiButton
      color={color}
      size={size}
      className={clsx('Button__container', className)}
      variant={buttonVariant}
      onClick={onClick}
    >
      <Typography color={titleColor} variant={titleVariant ?? 'body1'} className='Button__title'>
        {title}
      </Typography>
    </MuiButton>
  );
}
