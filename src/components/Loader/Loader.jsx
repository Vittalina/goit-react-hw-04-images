import { Audio } from 'react-loader-spinner';
import 'styles/styles.css';

const Loader = () => {
  return (
    <div className="Loader-wrapper">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loader;
