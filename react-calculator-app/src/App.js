import * as math from "mathjs";

import { Button } from './Compononets/Button/button';
import { Input } from './Compononets/Input';
import { useState } from 'react';

export const App = () => {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    const calcResult = math.evaluate(text);
    if (Number.isInteger(calcResult)) {
      setResult(calcResult);
    } else {
      setResult(calcResult.toFixed(2));
    }
    setText("");
  }

  const addText = (val) => {
    setResult("");
    setText((prev) => prev + val);


  }

  const clear = () => {
    setResult("");
    setText("");
  }

  const toggleSign = () => {
    setText(text * -1);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className='bg-black w-96 rounded-2xl'>
        <Input text={text} result={result} />
        <div className='flex'>
          <Button value={"AC"} bgColor={"#A5A5A5"} color={"#000"} handleClick={clear} />
          <Button value={"+/-"} bgColor={"#A5A5A5"} color={"#000"} handleClick={toggleSign} />
          <Button value={"%"} bgColor={"#A5A5A5"} color={"#000"} handleClick={addText} />
          <Button value={"/"} bgColor={"#F3930A"} handleClick={addText} />
        </div>
        <div className='flex'>
          <Button value={7} handleClick={addText} />
          <Button value={8} handleClick={addText} />
          <Button value={9} handleClick={addText} />
          <Button value={"*"} bgColor={"#F3930A"} handleClick={addText} />
        </div>
        <div className='flex'>
          <Button value={4} handleClick={addText} />
          <Button value={5} handleClick={addText} />
          <Button value={6} handleClick={addText} />
          <Button value={"-"} bgColor={"#F3930A"} handleClick={addText} />
        </div>
        <div className='flex'>
          <Button value={1} handleClick={addText} />
          <Button value={2} handleClick={addText} />
          <Button value={3} handleClick={addText} />
          <Button value={"+"} bgColor={"#F3930A"} handleClick={addText} />
        </div>
        <div className='flex'>
          <Button value={0} handleClick={addText} />
          <Button value={"."} handleClick={addText} />
          <Button value={"="} bgColor={"#F3930A"} handleClick={calculate} />
        </div>
      </div>
    </div>
  );
}


