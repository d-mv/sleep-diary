import { Button, ButtonProps } from '../Button';

export function SuccessButton(props: ButtonProps) {
  return (
    <Button buttonVariant='contained' color='success' titleVariant='body2' titleColor='#fff' size='large' {...props} />
  );
}
