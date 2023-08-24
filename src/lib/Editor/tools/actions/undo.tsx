import Tool from '../tool';

const Undo = () => {
  return <Tool icon='arrow-rotate-left' title='Undo' onClick={() => document.execCommand('undo', false, 'true')} />;
};

export default Undo;
