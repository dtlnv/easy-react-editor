import Tool from '../tool';

const Ol = () => {
  return <Tool icon='list-ol' title='OL' onClick={() => document.execCommand('insertOrderedList', false, 'true')} />;
};

export default Ol;
