import { Button, ButtonProps } from '../Button';

export function PrimaryButton(props: ButtonProps) {
  return (
    <Button buttonVariant='contained' color='primary' titleVariant='body2' titleColor='#fff' size='large' {...props} />
  );
}
