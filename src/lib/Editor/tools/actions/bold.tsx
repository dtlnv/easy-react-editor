import Tool from '../tool';

const Bold = () => <Tool icon='bold' title='Bold' onClick={() => document.execCommand('bold', false, 'true')} />;

export default Bold;
