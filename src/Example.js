import { useState, createContext, useContext } from "react";
import { Sample2 } from "./Sample2";
const NameContext = createContext();

function Example() {
  //   const nameList = ["Abhishek", "Amol", "Bhanu"];
  const [nameList, setNameList] = useState(["Abhishek", "Amol", "Bhanu"]);
  const [name, setName] = useState("Deeksha");

  function sayHello() {
    alert("You have Clicked me!!!");
  }

  return (
    <NameContext.Provider value={name}>
      <div>
        <Sample />
        <Sample1 />
        <Sample2 />
        {/* {nameList.map((data) => (
          <Sample name={data} />
        ))}
        <button onClick={sayHello}>Click Me</button>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(event) => setName(event.target.value)}
        />
        //copy the colorList and add newColor to it
        <button onClick={() => setNameList([...nameList, name])}>
          Change Name
        </button> */}
      </div>
    </NameContext.Provider>
  );
}

//useContext(context)
export const useGlobalContext = () => {
  return useContext(NameContext);
};

function Sample() {
  const name = useContext(NameContext);

  return (
    <div>
      <h1>Welcome, {name}</h1>
      {/* <Sample1 name={name} /> */}
    </div>
  );
}

function Sample1() {
  const name = useContext(NameContext);
  return (
    <div>
      <h1>Welcome, {name}</h1>
    </div>
  );
}

export default Example;
