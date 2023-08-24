import Tool from '../tool';

const Italic = () => <Tool icon='italic' title='Italic' onClick={() => document.execCommand('italic', false, 'true')} />;

export default Italic;
