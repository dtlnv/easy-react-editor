import React, { useEffect, useState } from 'react';
import EasyReactEditor from './lib/Editor';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('text changed', text);
  }, [text]);

  return (
    <div className='App'>
      <EasyReactEditor text={text} setText={setText} />
    </div>
  );
}

export default App;
