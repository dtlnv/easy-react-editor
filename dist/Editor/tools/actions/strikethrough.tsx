import React from 'react';
import Tool from '../tool';

const StrikeThrough = () => {
  return (
    <Tool icon='strikethrough' title='StrikeThrough' onClick={() => document.execCommand('strikeThrough', false, 'true')} />
  );
};

export default StrikeThrough;
