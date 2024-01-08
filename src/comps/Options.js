import React, { useState } from "react";
import { nanoid } from "nanoid";
import Code from "./Code";

function Options() {
  return (
    <>
      {Object.entries(Code).map((item) => {
        let key = item[0];
        let val = item[1];
        return (
          <option value={val} key={nanoid()}>
            {key}
          </option>
        );
      })}
    </>
  );
}

export default Options;
