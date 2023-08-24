'use client';

import React from 'react';
import Toolbar from './toolbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './styles/editor.css';

library.add(fas);

interface EditorProps {
  text: string;
  setText: (value: string) => void;
  placeholder?: string;
  tools?: string[];
}

const EasyReactEditor: React.FC<EditorProps> = ({ text, setText, placeholder = 'Type text here...', tools }) => {
  const [defaultText] = React.useState<string>(text);
  const ref = React.useRef<HTMLDivElement>(null);

  const clearEditor = () => {
    setTimeout(() => {
      if (ref.current) {
        const elements: NodeListOf<Element> = ref.current.querySelectorAll('*');
        elements.forEach((element: Element) => {
          element.removeAttribute('style');
        });
      }
    });
  };

  const saveText = () => {
    setTimeout(() => {
      if (ref.current) {
        setText(ref.current.innerHTML);
      }
    });
  };

  return (
    <div id='ereditor'>
      <div
        className='content'
        contentEditable
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: defaultText }}
        data-placeholder={placeholder}
        ref={ref}
        onPaste={clearEditor}
        onInput={saveText}
      />
      <Toolbar tools={tools} />
    </div>
  );
};

export default EasyReactEditor;
