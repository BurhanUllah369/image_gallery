import { useState } from "react";
import Form from "./components/Form";
import Main from "./components/Main";

function App() {
  const [value, setValue] = useState('')
  const handleValue = (data) => {
    setValue(data)
  }

  return (
    <div className="app">
      <Form sendToMain={handleValue}/>
      <Main value={value}/>
    </div>
  );
}

export default App;
