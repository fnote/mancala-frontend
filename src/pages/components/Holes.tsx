import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {Block, Pit, totalResponse} from "../../constants/types";
import {createGame,getLatestGameStatus} from "../../apis/API";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
const sideHole = require("../../images/side-hole.png");

const hole = require("../../images/hole.png");
require("../../images/side-hole.png");
const currentDate = new Date();
Math.floor(currentDate.getTime() / 1000);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));
const Holes = (): JSX.Element => {
  // const k = {"id":"6265689427f05d67741ef728","pits":
  //       [{"id":1,"stones":6},{"id":2,"stones":6},{"id":3,"stones":6},
  //         {"id":4,"stones":6},{"id":5,"stones":6},{"id":6,"stones":0},
  //         {"id":7,"stones":1},{"id":8,"stones":7},{"id":9,"stones":7},
  //         {"id":10,"stones":7},{"id":11,"stones":7},{"id":12,"stones":7},
  //         {"id":13,"stones":6},{"id":14,"stones":0}],"playerTurn":"PlayerB"}
  const [, setBlocks] = useState<Block[]>([]);
  const [game,setGame] = useState<string>('');
  const [pits, setPits] = useState<Pit[]>([]);
  const [playerTurn, setPlayerTurn] = useState<string>('PlayerA');
  // const [totalResponse, setTotalResponse] = useState<totalResponse>(k);

  const notifyError = () => toast("Please try again!");


  const getData = (game: string,pitNumber: number): void => {
    console.log(pitNumber)
    console.log(pits)
    getLatestGameStatus(game,pitNumber)
      .then((data) => {
        // @ts-ignore
        setPits(data.pits);
        setPlayerTurn(data.playerTurn)
      })
      .catch((err: Error) => {
        console.log(err);
        notifyError();
      });
  };

  useEffect(() => {
    (async()=>{
       const data = await createGame()
        console.log(data)
        setPits(data.pits)
        setGame(data.id)
        setPlayerTurn(data.playerTurn)
    })()
  },[]);

  if(pits.length>0){
    return (
      <>
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
            14
            <img className={'sideHole'} width={'auto'} height={'auto'} src={sideHole} alt={'auto'}/>
            <p>Pit House stones = {pits && pits[13].stones}</p>

          </Box>
        </>
        <Box sx={{ width: '80%' }}>
          <p><b>player B</b></p>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid item md={2} onClick={getData.bind(this,game,13)}>
              <Item>13
                <img className={'hole'} width={'auto'} height={'auto'} src={hole} alt={'auto'}/>
                <p>{pits && pits[12].stones}</p>
              </Item>
            </Grid>
            <Grid item xs={2} onClick={getData.bind(this,game,12)}>
              <Item>12
                <img className={'hole'} width={'auto'} height={'auto'} src={hole}/>
                <p>{pits && pits[11].stones}</p>
              </Item>
            </Grid>
            <Grid item xs={2} onClick={getData.bind(this,game,11)}>
              <Item>11
                <img className={'hole'} width={'auto'} height={'auto'} src={hole}/>
                <p>{pits && pits[10].stones}</p>
              </Item>
            </Grid>
            <Grid item xs={2} onClick={getData.bind(this,game,10)}>
              <Item>10
                <img className={'hole'} width={'auto'} height={'auto'} src={hole}/>
                <p>{pits && pits[9].stones}</p>
              </Item>
            </Grid>
            <Grid item xs={2} onClick={getData.bind(this,game,9)}>
              <Item>9
                <img className={'hole'} width={'auto'} height={'auto'} src={hole}/>
                <p>{pits && pits[8].stones}</p>
              </Item>
            </Grid>
            <Grid item xs={2} onClick={getData.bind(this,game,8)}>
              <Item>8
                <img className={'hole'} width={'auto'} height={'auto'} src={hole}/>
                <p>{pits && pits[7].stones}</p>
              </Item>
            </Grid>
          </Grid>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid item md={2} onClick={getData.bind(this,game,1)}>
              <Item>1
                <img className={'hole'} width={'auto'} height={'auto'} src={hole}/>
                <p>{pits && pits[0].stones}</p>
              </Item>
            </Grid>
            <Grid item xs={2} onClick={getData.bind(this,game,2)}>
              <Item>2
                <img className={'hole'} width={'auto'} height={'auto'} src={hole}/>
                <p>{pits && pits[1].stones}</p>
              </Item>
            </Grid>
            <Grid item xs={2} onClick={getData.bind(this,game,3)}>
              <Item>3
                <img className={'hole'} width={'auto'} height={'auto'} src={hole}/>
                <p>{pits && pits[2].stones}</p>
              </Item>
            </Grid>
            <Grid item xs={2} onClick={getData.bind(this,game,4)}>
              <Item>4
                <img className={'hole'} width={'auto'} height={'auto'} src={hole}/>
                <p>{pits && pits[3].stones}</p>
              </Item>
            </Grid>
            <Grid item xs={2} onClick={getData.bind(this,game,5)}>
              <Item>5
                <img className={'hole'} width={'auto'} height={'auto'} src={hole}/>
                <p>{pits && pits[4].stones}</p>
              </Item>
            </Grid>
            <Grid item xs={2} onClick={getData.bind(this,game,6)}>
              <Item>6
                <img className={'hole'} width={'auto'} height={'auto'} src={hole}/>
                <p>stones = {pits && pits[5].stones}</p>
              </Item>
            </Grid>
          </Grid>
          <p><b>Player A</b></p>
          <p><b>player turn  = {playerTurn}</b></p>
        </Box>
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
            7
            <img className={'sideHole'} width={'auto'} height={'auto'} src={sideHole} alt={'auto'}/>
            <p>Pit House stones ={pits && pits[6].stones}</p>

          </Box>
        </>

      </>
    )
  }else{
    return <div></div>
  }
};

export default Holes;
