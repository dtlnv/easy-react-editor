import Tool from '../tool';

const StrikeThrough = () => {
  return (
    <Tool icon='strikethrough' title='Strike Through' onClick={() => document.execCommand('strikeThrough', false, 'true')} />
  );
};

export default StrikeThrough;
