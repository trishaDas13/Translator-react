import React, { useEffect, useState } from "react";
import  axios  from "axios";
import { nanoid } from "nanoid";
import Options from './Options';

function Translator() {
  async function fetchAPI() {
    // const url = "https://text-translator2.p.rapidapi.com/translate";
    
//      let headers = {
//         'content-type': 'application/x-www-form-urlencoded',
//         'X-RapidAPI-Key': '1122af1d47msh13586f5289bfbb7p1b957fjsn2d5918a8cd96',
//         'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
//       }
//      let data = {
//         source_language: "en",
//         target_language: "hi",
//         text: "What is your name?",
//       }
    

//     try {
//       const response = await axios.post(url, data, {headers});
//       const result = await response.data;
//       console.log(result.data);
//     } catch (error) {
//       console.error(error);
//     }
  }

//   useEffect(() => {
//     fetchAPI();
//   }, [])
  

  return (
    <>
    <div className="container">
      <select name="translate" id="translate">
        <option value="en" hidden> Select Source Language </option>
        <Options/>
      </select>
      <select name="translate" id="translate">
        <option value="en" hidden>Select Target Language
        </option>
        <Options/>
      </select>
    </div>
          <button onClick={fetchAPI}>Translate</button>

          </>
  );
}

export default Translator;
