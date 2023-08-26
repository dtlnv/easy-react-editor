import './styles/tools.css';
import { Bold, Hr, Italic, Ol, Redo, StrikeThrough, Ul, Underline, Undo } from './tools';

export const defaultTools: string[] = ['Undo', 'Redo', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'UL', 'OL', 'HR'];

interface ToolbarProps {
  tools?: string[] | undefined;
}

const Toolbar: React.FC<ToolbarProps> = ({ tools = defaultTools }) => {
  return (
    <div id='ere-tools'>
      {tools?.includes('Undo') && <Undo />}
      {tools?.includes('Redo') && <Redo />}
      {tools?.includes('Bold') && <Bold />}
      {tools?.includes('Italic') && <Italic />}
      {tools?.includes('StrikeThrough') && <StrikeThrough />}
      {tools?.includes('Underline') && <Underline />}
      {tools?.includes('UL') && <Ul />}
      {tools?.includes('OL') && <Ol />}
      {tools?.includes('HR') && <Hr />}
    </div>
  );
};

export default Toolbar;
