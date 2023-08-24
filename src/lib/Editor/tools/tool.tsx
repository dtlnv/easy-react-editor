import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ToolProps {
  icon?: IconProp;
  type?: string;
  title?: string;
  [x: string]: any;
}

const Tool: React.FC<ToolProps> = ({ type, icon, title, ...rest }) => (
  <div
    className='tool'
    onMouseDown={(e) => {
      e.preventDefault();
      const element = document?.querySelector('#ssre .content') as HTMLElement | null;

      if (element) {
        if (typeof element.focus === 'function') {
          element.focus();
        }
      }
    }}
    title={title}
    {...rest}
  >
    {icon ? <FontAwesomeIcon icon={icon} /> : type}
  </div>
);

export default Tool;
