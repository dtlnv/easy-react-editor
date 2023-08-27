import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
interface ToolProps {
    icon?: IconProp;
    title?: string;
    [x: string]: any;
}
declare const Tool: React.FC<ToolProps>;
export default Tool;
