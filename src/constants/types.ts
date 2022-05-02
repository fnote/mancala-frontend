export type Block = {
  hash: string;
  key: string;
  time: string;
  height: number;
  size: number;
  block_index: number;
  ver:number
  prev_block:string,
  next_block: string[],
    previousHash: string;
  tx:any
};

export type Pit = {
  id: number;
  stones: number;
};

export type totalResponse = {
  id: string,
  pits:Pit[],
  playerTurn:string
}
