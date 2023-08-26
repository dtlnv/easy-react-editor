import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ToolProps {
  icon?: IconProp;
  title?: string;
  [x: string]: any;
}

const Tool: React.FC<ToolProps> = ({ icon, title, ...rest }) => (
  <div
    className='ere-tool'
    title={title}
    onMouseDown={(e) => {
      e.preventDefault();
      const element = document?.querySelector('#ereditor .content') as HTMLElement | null;

      if (element && typeof element.focus === 'function') {
        element.focus();
      }
    }}
    {...rest}
  >
    {icon && <FontAwesomeIcon icon={icon} />}
  </div>
);

export default Tool;
