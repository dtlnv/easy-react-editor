import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ToolProps {
  icon?: IconProp;
  [x: string]: any;
}

const Tool: React.FC<ToolProps> = ({ icon, ...rest }) => {
  return (
    <div
      className='ere-tool'
      onMouseDown={(e) => {
        e.preventDefault();
        const element = document?.querySelector('#ereditor .ere-content') as HTMLElement | null;

        if (element && typeof element.focus === 'function') {
          element.focus();
        }
      }}
      {...rest}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
    </div>
  );
};

export default Tool;
