import { Button, ButtonProps } from '../Button';

export function SecondaryButton(props: ButtonProps) {
  return (
    <Button
      buttonVariant='outlined'
      color='secondary'
      titleVariant='body2'
      titleColor='secondary'
      size='medium'
      {...props}
    />
  );
}
