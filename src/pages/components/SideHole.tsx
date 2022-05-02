import React from "react";
import Box from "@mui/material/Box";
import "react-toastify/dist/ReactToastify.css";

const sideHole = require("../../images/side-hole.png");
const SideHole = (stones:any): JSX.Element => {
  return (
    <>
      <Box
        sx={{
          width: 100,
          height: 300,
          backgroundColor: '#ea922e',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
          2
        <img className={'sideHole'} width={'auto'} height={'auto'} src={sideHole} alt={'auto'}/>
          <p>Pit House stones =</p>

      </Box>
    </>
  );
};

export default SideHole;
