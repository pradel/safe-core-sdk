import { BaseTransactionResult } from '@safe-global/safe-core-sdk-types'
import { Web3EventMap, Web3PromiEvent } from 'web3-core'
import { TransactionReceipt } from 'web3-types'

export interface Web3TransactionOptions {
  from?: string
  gas?: number | string
  gasPrice?: number | string
  maxFeePerGas?: number | string
  maxPriorityFeePerGas?: number | string
  nonce?: number
}

export interface Web3TransactionResult extends BaseTransactionResult {
  promiEvent: Web3PromiEvent<TransactionReceipt, Web3EventMap>
  options?: Web3TransactionOptions
}
