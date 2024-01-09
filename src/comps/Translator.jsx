import React, { useEffect, useState } from "react";
import axios from "axios";
import CopyText from "./CopyText";
import Options from "./Options";
import lottie from "./lottie.svg"

function Translator() {
  //todo: declair state varriable
  const [sourceText, setSourceText] = useState("en");
  const [targetText, setTargetText] = useState("bn");
  const [textInput, setTextInput] = useState("");
  const [results, setResults] = useState("");

  //todo: fetching the API
  async function fetchAPI() {
    const url = "https://text-translator2.p.rapidapi.com/translate";
    let headers = {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "1122af1d47msh13586f5289bfbb7p1b957fjsn2d5918a8cd96",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    };
    let data = {
      source_language: sourceText,
      target_language: targetText,
      text: textInput,
    };
    try {
      const response = await axios.post(url, data, { headers });
      const result = await response.data;

      if (result.status === "success") {
        const textResult = JSON.parse(`"${result.data.translatedText}"`);
        setResults(textResult);
      } else {
        alert("Error in API call");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="storage">
      <div className="container">
        <div className="language_container">
          {/* source language  */}
          <select
            id="sourcelanguage"
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
          >
            <option value="main" hidden>
              Select Source Language
            </option>
            <Options />
          </select>

          {/* target language  */}
          <select
            id="targetlanguage"
            value={targetText}
            onChange={(e) => setTargetText(e.target.value)}
          >
            <option value="main" hidden>
              Select Target Language
            </option>
            <Options />
          </select>
        </div>
        <br />
        <textarea
          cols="30"
          rows="8"
          placeholder="Enter text to translate..."
          onChange={(e) => setTextInput(e.target.value)}
        ></textarea>
        <br />
        <button onClick={fetchAPI}>Translate</button>
        <div 
          className="resultContainer"
          style={{display: textInput === "" ?
                  'none' : 'block'}}
        >
          <p className="result">{results}</p>
          <CopyText text={results} />
        </div>
      </div>
      <div className="lottie">
        <img src={lottie} alt="" />
      </div>
    </div>
  );
}

export default Translator;
