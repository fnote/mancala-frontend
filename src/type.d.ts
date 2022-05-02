interface AddBlock {
    _id: string
    id: number
    name: string
    description?: string
    status: boolean
    createdAt?: string
    updatedAt?: string
    hash?: string
    time: number;
    height: number;
    block_index: number;
}
type ApiDataType = {
    message: string
    status: string
    data?: Block[] | Block
    addBlocks: AddBlock[]
    addBlock?: AddBlock
  }
