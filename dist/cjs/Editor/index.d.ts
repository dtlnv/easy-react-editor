import React from 'react';
import './styles/editor.css';
interface EditorProps {
    text: string;
    setText: (value: string) => void;
    placeholder?: string;
    tools?: string[];
}
declare const EasyReactEditor: React.FC<EditorProps>;
export default EasyReactEditor;
