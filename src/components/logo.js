/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
    path="/"
    sx={{
      variant:'links.logo',
      display: 'flex',
      cursor: 'pointer',
      mr: 20,
    }}
    {...rest}
    >
      <Image className="log" src={src} alt="logo" />
    </Link>
  );
}

const styles = {
  log: {
    width: ['15px', '25px'],
    height: '2',
    
    mt: '2px',
  },
};
