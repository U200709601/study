import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {


  const [mobileOpen , setMobileOpen] = useState(false);

  const handleDrawer = () => {
    setMobileOpen(!mobileOpen);
  }
  const pageHeaders = {
    Cards: "/",
  };

  const drawer = (
    <Box onClick= {handleDrawer} sx={{textAlign: "center", height: "98vh",width: "300px", overflow: 'hidden'}}>

        <img
        src={process.env.PUBLIC_URL + "/assets/images/logo/logo192.png"}         
             style={{
              width: "100px",
              height: "100px",
              margin: 0
            }}
            alt="Logo"
          />
      <ul style={{
        margin: -5,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: "6%",
        height: "100%",
        backgroundColor: "#18181b",
        listStyleType: "none"
      }}>
        {Object.keys(pageHeaders).map((key) =>(
          <li key={key} >
            <Link to={pageHeaders[key]}>
              <Typography>
                {key.split("_").join(" ")}
              </Typography>

            </Link>
          </li>
        ))}

      </ul>

    </Box>
  )
  return (
    <Box sx={{
      marginBottom: "40px",
      height: "50px"
    }}>
      <AppBar
        sx={{
          backgroundColor: "#18181b",
          minWidth:"100%",
          opacity: 0.8,
        }}
      >
        <Toolbar disableGutters sx={{
          display: "flex",
          width: "100%"
        }}>

          <IconButton onClick={handleDrawer} sx={{display: { sm: "none"}}}>

            <MenuIcon sx={{
              color: "white"
            }}/>
          </IconButton>
          <img
        src={process.env.PUBLIC_URL + "/assets/images/logo/logo192.png"}         
        style={{
              width: 50,
              height: 50,
              marginRight: "10px-"
            }}
            alt="Logo"
          />
          <Box  sx={{ display: { xs: 'none', sm: 'block' }, minWidth: "100%" }}>
            <ul style={{ display: "flex", listStyleType: "none", gap: "7%" }}>
              {Object.keys(pageHeaders).map((key) => (
                <li key={key}>
                  <Link to={pageHeaders[key]} style={{ textDecoration: "none", cursor: "pointer" }}>
                    <Typography className="hover-effect" key={key} sx={{
                      cursor: "pointer",
                      color: "white"
                    }}>{key.split("_").join(" ")}</Typography>
                  </Link>
                </li>
              ))}
            </ul>

          </Box>
          
        </Toolbar>
      </AppBar>
      <Box component={"nav"}>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawer}
          sx={{
            display: { xs: "block", sm: "none" }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
