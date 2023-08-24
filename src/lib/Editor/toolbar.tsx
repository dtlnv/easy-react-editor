import './styles/tools.css';
import { Bold, Hr, Italic, Ol, Redo, StrikeThrough, Ul, Underline, Undo } from './tools';

const defaultTools: string[] = ['Undo', 'Redo', 'Bold', 'Italic', 'Underline', 'Ul', 'Ol', 'Hr'];

interface ToolbarProps {
  tools: string[] | undefined;
}

const Toolbar: React.FC<ToolbarProps> = ({ tools = defaultTools }) => {
  return (
    <div id='tools'>
      {tools?.includes('Undo') && <Undo />}
      {tools?.includes('Redo') && <Redo />}
      {tools?.includes('Bold') && <Bold />}
      {tools?.includes('Italic') && <Italic />}
      {tools?.includes('StrikeThrough') && <StrikeThrough />}
      {tools?.includes('Underline') && <Underline />}
      {tools?.includes('Ul') && <Ul />}
      {tools?.includes('Ol') && <Ol />}
      {tools?.includes('Hr') && <Hr />}
    </div>
  );
};

export default Toolbar;
