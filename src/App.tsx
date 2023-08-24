import React, { useEffect } from 'react';
import './App.css';
import EasyReactEditor from './lib/Editor';

function App() {
  const [text, setText] = React.useState('');

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
