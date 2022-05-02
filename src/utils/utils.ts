import { Block } from "../constants/types";

/**
 * get relative time between two epoch times
 * @param current number
 * @param previous number
 */
export const relativeTime= (current:number, previous:number) =>{

  const msPerMinute = 60;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;
  console.log(elapsed, current, previous);

  if (elapsed < msPerMinute) {
    return Math.round(elapsed/1000) + ' seconds ago';
  }

  else if (elapsed < msPerHour) {
    return Math.round(elapsed/msPerMinute) + ' minutes ago';
  }

  else if (elapsed < msPerDay ) {
    return Math.round(elapsed/msPerHour ) + ' hours ago';
  }

  else if (elapsed < msPerMonth) {
    return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';
  }

  else if (elapsed < msPerYear) {
    return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';
  }

  else {
    return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';
  }
}

/**
 * filter only required values from json for display
 * @param json
 */
export const transformData=(json:Block)=>{
  const keyValues = [];
  keyValues.push(`1. Index:         ${json.block_index}`)
  keyValues.push(`2. Hash:          ${json.hash}`);
  keyValues.push(`3. Time:          ${json.time}`)
  keyValues.push(`4. Version:       ${json.ver}`)
  keyValues.push(`5. Previous hash: ${json.prev_block}`)
  keyValues.push(`6. Size:          ${json.size}`)

  return keyValues;
}

/**
 * get last 10 transaction details from the block
 * @param json
 */
export const transformTransactions= (json: Block)=>{
  const transactions = json.tx.slice(0,10);
  const keyValues: string[] = [];
  transactions.forEach((element: {
    lock_time: string;
    weight: string;
    fee: any; nonce: any; hash:any }, index:number)=>{
    keyValues.push(`${index}. FEE : ${element.fee}  | LOCK TIME : ${element.lock_time}    |  WEIGHT : ${element.weight}    |  HASH : ${element.hash}`)
  })

  return keyValues;
}
