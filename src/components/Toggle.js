import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(true)

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  return <button onClick={handleClick}>{isOn ? "OFF" : "ON"}</button>;
}

export default Toggle;