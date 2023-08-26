import Tool from '../tool';

const Ul = () => {
  return <Tool icon='list' title='UL' onClick={() => document.execCommand('insertUnorderedList', false, 'true')} />;
};

export default Ul;
