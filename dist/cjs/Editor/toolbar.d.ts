import React from 'react';
import './styles/tools.css';
export declare const defaultTools: string[];
interface ToolbarProps {
    tools?: string[] | undefined;
}
declare const Toolbar: React.FC<ToolbarProps>;
export default Toolbar;
