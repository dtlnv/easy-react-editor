import React from 'react';
import Tool from '../tool';

const Underline = () => {
  return <Tool icon='underline' title='Underline' onClick={() => document.execCommand('underline', false, 'true')} />;
};

export default Underline;
