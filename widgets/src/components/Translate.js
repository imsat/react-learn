import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "../Convert";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
  { label: "Bangla", value: "bn" },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="text">Enter Text</label>
          <input
            id="text"
            className=""
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <Dropdown
          label="Select a Language"
          selected={language}
          onSelectedChange={setLanguage}
          options={options}
        />
        <hr />
        <h3 className="ui header">Output</h3>
        <Convert language={language} text={text} />
      </div>
    </div>
  );
};

export default Translate;
