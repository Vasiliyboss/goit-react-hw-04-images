import { Audio } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};
