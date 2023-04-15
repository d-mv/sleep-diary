import { Typography } from '@mui/material';

import './RoundButton.css';

interface Props {
  title: string;
  onClick: () => void;
  innerStyle?: React.CSSProperties;
  outerStyle?: React.CSSProperties;
}

export function RoundButton({ innerStyle, outerStyle, title, onClick }: Props) {
  return (
    <div className='RoundButton__container'>
      <button className='RoundButton__button_outer' onClick={onClick} style={outerStyle}>
        <div className='RoundButton__button_inner' style={innerStyle}>
          <Typography variant='body1' color='#fff'>
            {title}
          </Typography>
        </div>
      </button>
    </div>
  );
}
