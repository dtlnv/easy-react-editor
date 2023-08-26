import React from 'react';
import Tool from '../tool';

const Bold = () => {
  return <Tool icon='bold' title='Bold' onClick={() => document.execCommand('bold', false, 'true')} />;
};

export default Bold;
