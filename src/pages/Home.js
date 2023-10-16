import React, { useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import BaseModal from "../layouts/BaseModal";
import AddStudyNote from "../forms/AddStudyNote";
import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import AddCard from "../forms/AddCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);
  const [openAddCardModal, setOpenAddCardModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(true);

  const toggleButtons = () => {
    setShowConfirm(!showConfirm);
  };

  const handleAddNote = () => {
    setOpenAddNoteModal(true);
  };

  const handleAddCard = () => {
    setOpenAddCardModal(true);
  }
  return (
    <>
      <BaseModal
        open={openAddNoteModal}
        setOpen={setOpenAddNoteModal}
        children={<AddStudyNote />}
      />
      <BaseModal
        open={openAddCardModal}
        setOpen={setOpenAddCardModal}
        children={<AddCard />}
      />


      <Header />

      <main className="select-cards">
        <div className="navigations">
          <div className="search">
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="nav-buttons">
            <Button
              id="add-card"
              className="add-button"
              variant="contained"
              endIcon={<AddIcon />}
              onClick={() => handleAddNote()}
            >
              ADD CARD
            </Button>

            {showConfirm ? (
              <Button
                className="add-button"
                variant="contained"
                endIcon={<AddIcon />}
                onClick={() => toggleButtons()}
              >
                ADD Section
              </Button>
            ) : (
              <div className="confirm">
                <LoadingButton
                  sx={{
                    mx: 1,
                    width: "40%",
                    alignSelf: "center",
                    margin: "auto",
                  }}
                  size="large"
                  type="submit"
                  variant="contained"
                  startIcon={<SaveIcon />}
                >
                  Save
                </LoadingButton>
                <div className="section-name-container">
                  <TextField required id="section-name" label="Section Name" />
                </div>
              </div>
            )}
          </div>
        </div>
        {
          <div className="sections">
            <div className="section">
              <div className="section-info">
              <p>Hukuk Notlarım</p>
              <IconButton onClick={() => handleAddCard()}>
                <LibraryAddIcon/>
              </IconButton>
              </div>
              <div className="small-cards">
                 <Link to={'/Note'}>
                  <div className="small-card">Not1</div>
                 </Link>
                
              </div>
            </div>
            <div className="section">
              <div className="section-info">
              <p>Onemli Notlarım</p>
              <IconButton onClick={() => handleAddCard()}>
                <LibraryAddIcon/>
              </IconButton>
              </div>
              <div className="small-cards">
                <div className="small-card">İnkilap Tarihi</div>
                
              </div>
            </div>
          </div>
          
        }
      </main>

      <Footer />
    </>
  );
}
