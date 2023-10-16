import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";

export default function AddStudyNote() {
  return (
    <div className="add-study-note">
      <div className="choose">
        <h2>Section: </h2>
        <select id="choose-section-study"></select>
      </div>
      <div className="choose">
        <h2>Note: </h2>
        <input
          type="text"
          placeholder="Name of Note"
          name="note"
          id="note-name"
        />
      </div>
      <div className="choose">
        <h2>Color: </h2>
        <input type="color" name="note" id="color-input" />
      </div>
      <LoadingButton
        sx={{ mx: 1, width:'40%', alignSelf:'center', margin:'auto', color:'white', backgroundColor:'#1d7a52'}}
        size="large"
        type="submit"
        variant="contained"
        startIcon={<SaveIcon sx={{color:'white'}}/>}
      >
        Save
      </LoadingButton>
    </div>
  );
}
