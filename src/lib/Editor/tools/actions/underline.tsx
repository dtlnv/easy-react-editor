import Tool from '../tool';

const Underline = () => (
  <Tool icon='underline' title='Strike Through' onClick={() => document.execCommand('underline', false, 'true')} />
);

export default Underline;
