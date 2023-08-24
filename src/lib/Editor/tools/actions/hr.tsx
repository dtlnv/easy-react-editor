import Tool from '../tool';

const Hr = () => {
  return <Tool icon='minus' title='Divider' onClick={() => document.execCommand('insertHorizontalRule', false, 'true')} />;
};

export default Hr;
