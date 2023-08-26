import React from 'react';
import Tool from '../tool';

const Italic = () => {
  return <Tool icon='italic' title='Italic' onClick={() => document.execCommand('italic', false, 'true')} />;
};

export default Italic;
