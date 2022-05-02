import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "react-toastify/dist/ReactToastify.css";

import { Block } from "../constants/types";
import { getLatestGameStatus,createGame } from "../apis/API";
import Holes from "./components/Holes";
import SideHole from "./components/SideHole";
import {Button} from "@mui/material";

const Board = (): JSX.Element => {
  const [, setBlocks] = useState<Block[]>([]);
  const [pageNumber] = useState<number>(1);

  // const createMancalaGame = (): void => {
  //   createGame()
  //       .then((data) => {
  //         console.log("In set state", JSON.stringify(data));
  //         // @ts-ignore
  //         setBlocks(data);
  //       })
  //       .catch((err: Error) => {
  //         console.log(err);
  //       });
  // };
  //
  // const fetchLatestBlocks = (): void => {
  //   getLatestGameStatus(pageNumber)
  //     .then((data) => {
  //       console.log("In set state", JSON.stringify(data.data));
  //       // @ts-ignore
  //       setBlocks(data.data);
  //     })
  //     .catch((err: Error) => {
  //       console.log(err);
  //     });
  // };
  // useEffect(() => {
  //   fetchLatestBlocks();
  // }, [pageNumber]);
  return (
    <>
      <>
        <Box sx={{ width: "100%" }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            {/*<SideHole />*/}
            {/*<Holes onClick={fetchLatestBlocks()}>*/}
            {/*<Holes onClick={fetchLatestBlocks()}></Holes>*/}
            <Holes/>
            {/*<SideHole />*/}
          </Grid>
        </Box>
        {/*<Button onClick={fetchLatestBlocks}>Button</Button>*/}
        {/*<Button onClick={createMancalaGame}>Create Game</Button>*/}
      </>

    </>
  );
};

export default Board;
