import { Button, ButtonProps } from '../Button';

export function CancelButton(props: ButtonProps) {
  return (
    <Button buttonVariant='text' color='inherit' titleVariant='body2' titleColor='info' size='medium' {...props} />
  );
}
