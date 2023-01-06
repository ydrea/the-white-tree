import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Checkbox from "../components/Checkbox";
import icons from "../public/icons.json";
//

function checkboxlist() {
  const item = icons.icons;

  const [checkArray, checkArraySet] = useState({ checktions: [] });

  const handleCheckboxCheck = (key) => {
    let sel = checkArray.checktions;
    let find = sel.indexOf(key);
    if (find > -1) {
      sel.splice(find, 1);
    } else {
      sel.push(key);
    }
    checkArraySet({ checktions: sel });
    console.log(checkArray.checktions);
  };

  return (
    <div>
      {item.map((i) => (
        <Checkbox
          id={`ckb${i.id}`}
          key={i.id}
          name={i.name}
          icon={i.icns}
          value={checkArray.checktions.includes(i)}
          onChange={() => handleCheckboxCheck(i)}
        />
      ))}
      <span>{checkArray.checktions.toString()}</span>
    </div>
  );
}

export default checkboxlist;
