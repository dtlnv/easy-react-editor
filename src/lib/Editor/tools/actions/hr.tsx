import Tool from '../tool';

const Hr = () => {
  return <Tool icon='minus' title='HR' onClick={() => document.execCommand('insertHorizontalRule', false, 'true')} />;
};

export default Hr;
