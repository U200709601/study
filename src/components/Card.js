import { IconButton } from "@mui/material";
import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";
import { useState } from "react";
import Header from "../layouts/Header";

export default function Card({ question, options, answer, correctOption, style }) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleRotateCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };
  return (
    <div >
    <Header/>
      <div style={style} className={`card-side front ${isCardFlipped ? "flipped" : ""}`}>
        <p className="card-side-text">Front of card</p>
        <textarea defaultValue={question}/>
        {/* <div className="options">
          <ul>
            <li className="option">A- Red</li>
            <li className="option">B- Blue</li>
            <li className="option">C- White</li>
            <li className="option">D- Brown</li>
          </ul>
        </div> */}
        <IconButton className="rotate-button" onClick={handleRotateCard}>
          <Rotate90DegreesCwIcon />
        </IconButton>
      </div>

      <div style={style} className={`card-side back ${isCardFlipped ? "flipped" : ""}`}>
        <p className="card-side-text">Back side of card</p>
        <textarea defaultValue={answer}/>
        {options ? (
          <div className="select-correct-option">
            <p>Select Correct Option:</p>
            <select className="correct-option"></select>
          </div>
          
          
        ) : (
          ''
        )}
          <IconButton
          className="rotate-button"
          onClick={handleRotateCard}
        >
          <Rotate90DegreesCwIcon />
        </IconButton>
      </div>

    </div>
  );
}
