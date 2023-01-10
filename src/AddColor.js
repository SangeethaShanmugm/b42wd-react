import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  // const color = "skyblue";
  const [color, setColor] = useState("skyblue");
  // const colorList = ["orange", "pink", "red", "violet"];
  const [colorList, setColorList] = useState([
    "orange",
    "pink",
    "red",
    "violet",
  ]);
  const styles = {
    backgroundColor: color,
  };

  return (
    <div>
      <div className="add-color">
        <input
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          type="text"
          value={color} />

        <button
          //copy the colorList and add newColor to it
          onClick={() => setColorList([...colorList, color])}
        >
          Add Color
        </button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
