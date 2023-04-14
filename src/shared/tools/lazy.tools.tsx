import { ComponentType, LazyExoticComponent, PropsWithChildren, ReactElement, Suspense } from 'react';
import { AnyValue, Optional } from '@mv-d/toolbelt';

interface LazyLoadOptions {
  isDefault: boolean;
  isLoading: JSX.Element;
  message?: string;
}

export function lazyLoad(Component: LazyExoticComponent<ComponentType<AnyValue>>, options?: Partial<LazyLoadOptions>) {
  let fallback: Optional<ReactElement> = null;

  if (options?.isDefault) fallback = <div>Loading...</div>;

  if (options?.isLoading) fallback = options?.isLoading;

  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
}

export function LazyLoad({ isDefault, isLoading, children, message }: PropsWithChildren<Partial<LazyLoadOptions>>) {
  let fallback: Optional<ReactElement> = null;

  if (isDefault) fallback = <div>{message ?? 'Loading...'}</div>;

  if (isLoading) fallback = isLoading;

  return <Suspense fallback={fallback}>{children}</Suspense>;
}
