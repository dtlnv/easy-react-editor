import React, { useEffect, useRef, useState } from 'react';
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
  const [isInitialMount, setIsInitialMount] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isInitialMount && contentRef.current) {
      contentRef.current.innerHTML = text;
    }
    setIsInitialMount(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialMount]);

  const clearEditorAction = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (contentRef.current) {
          const elements: NodeListOf<Element> = contentRef.current.querySelectorAll('*');
          elements.forEach((element: Element) => {
            element.removeAttribute('style');
          });
        }
        resolve(true);
      });
    });
  };

  const saveTextAction = async () => {
    if (contentRef.current) {
      await clearEditorAction();
      setText(contentRef.current.innerHTML);
    }
  };

  return (
    <div id='ereditor'>
      <div
        className='ere-content'
        contentEditable
        suppressContentEditableWarning
        data-placeholder={placeholder}
        ref={contentRef}
        onPaste={clearEditorAction}
        onInput={saveTextAction}
      />
      <Toolbar tools={tools} />
    </div>
  );
};

export default EasyReactEditor;
