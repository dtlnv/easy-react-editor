import Tool from '../tool';

const Underline = () => {
  return <Tool icon='underline' title='Strike Through' onClick={() => document.execCommand('underline', false, 'true')} />;
};

export default Underline;
