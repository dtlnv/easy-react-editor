import Tool from '../tool';

const Redo = () => <Tool icon='arrow-rotate-right' title='Redo' onClick={() => document.execCommand('redo', false, 'true')} />;

export default Redo;
