import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { LoadingButton } from "@mui/lab";
import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";
import { IconButton } from "@mui/material";

export default function AddCard() {
  const [showOptionText, setShowOptionText] = useState(false);
  const [hasOptions, setHasOptions] = useState(true);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const handleAddOption = () => {};

  const toggleButtons = () => {
    setShowOptionText(!showOptionText);
  };

  const handleRotateCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };
  return (
    <div className="add-card-section">
      <div className="choose-section">
        <div className="choose-text">
        <h2>Choose a note: </h2>
        </div>
        <select></select>
      </div>
      <div className={`card-side front ${isCardFlipped ? "flipped" : ""}`}>

        <p className="card-side-text">Front of card</p>
        <textarea>What is the color of sea?</textarea>
        {showOptionText ? (
          <div className="option-text">
            <input type="text" name="option" id="option-input" />
            <LoadingButton
              sx={{
                mx: 1,
                width: "80px",
                alignSelf: "center",
                margin: "auto",
                height: "30px",
                color: "white",
                backgroundColor: "#3c505e",
              }}
              size="large"
              className="confirm-add-option"
              variant="contained"
              onClick={() => handleAddOption()}
              startIcon={<AddBoxIcon sx={{ color: "white" }} />}
            >
              Add
            </LoadingButton>
          </div>
        ) : (
          <div className="add-option" onClick={() => toggleButtons()}>
            Add Option
            <AddBoxIcon />
          </div>
        )}
        <div className="options">
          <ul>
            <li className="option">A- Red</li>
            <li className="option">B- Blue</li>
            <li className="option">C- White</li>
            <li className="option">D- Brown</li>
            
          </ul>
        </div>
        <IconButton
        className="rotate-button"
        onClick={handleRotateCard}
      >
        <Rotate90DegreesCwIcon />
      </IconButton>
      </div>
      <div className={`card-side back ${isCardFlipped ? "flipped" : ""}`}>
        <p className="card-side-text">Back side of card</p>
        <textarea placeholder="Answer of question"></textarea>
        {hasOptions ? (
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

      <LoadingButton
        sx={{
          mx: 1,
          width: "80px",
          position: "absolute",
          bottom: "2%",
          alignSelf: "center",
          margin: "auto",
          marginTop: "20px",
          color: "white",
          backgroundColor: "#1d7a52",
        }}
        className="save-add-card"
        size="large"
        type="submit"
        variant="contained"
        startIcon={<SaveIcon className="save-icon" sx={{ color: "white" }} />}
      >
        <span className="save-text">Save</span>
        
      </LoadingButton>
    </div>
  );
}
