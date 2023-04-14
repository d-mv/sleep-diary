interface Props {
  vertical?: boolean;
  width?: number;
  height?: number;

  one?: boolean;
  two?: boolean;
}

export function Spacer({ vertical, width, height, one, two }: Props) {
  const getRems = () => (one ? '1rem' : two ? '2rem' : '0rem');

  function makeStyle() {
    if (vertical) return { height: height ?? getRems(), width: width ?? '100%' };

    return { height: height ?? '100%', width: width ?? getRems() };
  }

  return <div style={makeStyle()} />;
}
