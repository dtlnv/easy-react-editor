import Tool from '../tool';

const Ol = () => {
  return <Tool icon='list-ol' title='Ordered List' onClick={() => document.execCommand('insertOrderedList', false, 'true')} />;
};

export default Ol;
