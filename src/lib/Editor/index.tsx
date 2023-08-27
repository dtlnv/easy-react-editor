'use client';

import React, { useRef, useState } from 'react';
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
  const [defaultText] = useState<string>(text);
  const ref = useRef<HTMLDivElement>(null);

  const clearEditorAction = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (ref.current) {
          const elements: NodeListOf<Element> = ref.current.querySelectorAll('*');
          elements.forEach((element: Element) => {
            element.removeAttribute('style');
          });
        }
        resolve(true);
      });
    });
  };

  const saveTextAction = async () => {
    if (ref.current) {
      await clearEditorAction();
      setText(ref.current.innerHTML);
    }
  };

  return (
    <div id='ereditor'>
      <div
        className='ere-content'
        contentEditable
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: defaultText }}
        data-placeholder={placeholder}
        ref={ref}
        onPaste={clearEditorAction}
        onKeyUp={saveTextAction}
      />
      <Toolbar tools={tools} />
    </div>
  );
};

export default EasyReactEditor;
