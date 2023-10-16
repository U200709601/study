import { Box, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const handleIcon = (site) => {
    
    if(site === "Instagram"){
      window.open('https://instagram.com/beyefeenddi?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==', '_blank');
    }else if(site === "GitHub"){
      window.open('https://github.com/FUnalDev', '_blank');
    }else if(site === "LinkedIn"){
      window.open('https://www.linkedin.com/in/furkan-unal-4b0262233', '_blank');
    }else if(site === "Email"){
      window.open('mailto:unal48furkan48@gmail.com', '_blank');
    }
  };
  return (
    <Box
      sx={{
        marginTop: "auto",
        minWidth: "100%",
        height: "75px",
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "column",

      }}
    >
      <Box 
        sx={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          /* "& svg": {
            fontSize: "50px",
            cursor: "pointer",
          },
          "& svg:hover": {
            color: "lightblue",
            transform: "translateX(5px)",
            transition: "all 400ms",
          }, */
          
        }}
      >
        <IconButton onClick={() => handleIcon("Instagram")}>
          <InstagramIcon className="footer-icon" sx={{fontSize:"30px"}}/>
        </IconButton>
        <IconButton onClick={() => handleIcon("GitHub") } >
          <GitHubIcon className="footer-icon" sx={{fontSize:"30px"}} />
        </IconButton>
        <IconButton onClick={() => handleIcon("LinkedIn")}>
          <LinkedInIcon className="footer-icon"  sx={{fontSize:"30px"}}/>
        </IconButton>
        <IconButton onClick={() => handleIcon("Email")}>
          <EmailIcon className="footer-icon"  sx={{fontSize:"30px"}}/>
        </IconButton>
      </Box>
      <Typography  textAlign={"center"} color={"white"}>
        Allrights Reserved By &copy; Furkan Ünal
      </Typography>
      
    </Box>
  );
}
