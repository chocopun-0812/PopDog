import {React, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Img from './components/Img';
import Title from './components/Title';

export default function PopDog() {

  const [count, setCount] = useState(0);

  function handleChange(){
    setCount(count+1);
  }

  return (
    <>
      <Title count={count}/>
      <Img onClick={handleChange}/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PopDog/>);