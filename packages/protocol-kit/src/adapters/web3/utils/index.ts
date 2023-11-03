import { Web3PromiEvent } from 'web3-core'
import { TransactionReceipt } from 'web3-types'
import {
  Web3TransactionOptions,
  Web3TransactionResult
} from '@safe-global/protocol-kit/adapters/web3/types'

export function sameString(str1: string, str2: string): boolean {
  return str1.toLowerCase() === str2.toLowerCase()
}

export async function toTxResult(
  promiEvent: Web3PromiEvent<TransactionReceipt, { transactionHash: string }>,
  options?: Web3TransactionOptions
): Promise<Web3TransactionResult> {
  return new Promise((resolve, reject) =>
    promiEvent
      .once('transactionHash', (hash: string) => resolve({ hash, promiEvent, options }))
      .catch(reject)
  )
}
