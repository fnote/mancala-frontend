import axios, { AxiosResponse } from "axios";
import {totalResponse} from "../constants/types";

const baseUrl: string = 'http://localhost:8080/games'


export const createGame = async (): Promise<totalResponse> => {
  try {
    const todos: any = await axios.post(
        `${baseUrl}`
    );
    console.log("Data", todos.data);
    return todos.data;
  } catch (error) {
    console.log("error in retriving jsons");
    throw error;
  }
};
/**
 * get latest blocks from third party endpoint for landing page
 * @param game
 * @param pitNumber number
 */
// @ts-ignore
export const getLatestGameStatus = async (game:string, pitNumber: number): Promise<totalResponse> => {
  try {
    const todos: any = await axios.put(
      `${baseUrl}/${game}/pits/${pitNumber}`
    );
    console.log("Data", todos.data);
    return todos.data;
  } catch (error) {
    console.log("error in retriving jsons");
    throw error;
  }
};

/**
 * get the list of blocks from mongodb for my blocks page
 */
// @ts-ignore
export const getMyBlocks = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: any = await axios.get(
      `${baseUrl}/blocks`
    );
    console.log("Data", todos.data);
    return todos.data;
  } catch (error) {
    console.log("error in retriving jsons");
    throw error;
  }
};

/**
 * get the details of one block from the cache or third party endpoint
 * @param hash string
 */
// @ts-ignore
export const getOneBlock = async (hash: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: any = await axios.get(
      `${baseUrl}/blocks/${hash}`
    );
    return todos.data;
  } catch (error) {
    console.log("error in retrieving jsons");
    throw error;
  }
};

/**
 * add block to mongodb for my blocks page
 * @param formData Object
 */
// @ts-ignore
export const addBlock = async (
  formData: AddBlock
) => {
  try {
    const block: Omit<AddBlock, "_id"> = {
      id: Math.floor((Math.random() * 100) + 1),
      name: formData?.name,
      description: formData?.description,
      status: false,
      hash: formData?.hash,
      time: formData?.time,
      height: formData?.height,
      block_index: formData?.block_index
    };
    return await axios.post(
      `${baseUrl}/blocks`,
      block
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};
