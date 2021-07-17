import { CurrencyAmount } from '@pancakeswap-libs/sdk'
import { getAddress } from '@ethersproject/address'
import { Contract } from '@ethersproject/contracts'
import { AddressZero } from '@ethersproject/constants'
import { Web3Provider, JsonRpcSigner } from '@ethersproject/providers'

export const utilGetTokenIcon = (address: string) => {
	return 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/' + address + '/logo.png';
}

export const utilGetBSCScanLink = (address: string) => {
	return 'https://bscscan.com/token/' + address + '';
}

export const utilCalculateHoldings = (holdingValue: string, target, decimals: number) => {
	if (holdingValue && target) {
		const holding = parseFloat(target) * parseFloat(holdingValue)
		return holding.toFixed(decimals)
	}
	
	return 0
}
  
export const utilCalculateHoldingsFromCurrency = (holding: CurrencyAmount | undefined | null, target, decimals: number) => {
	if (holding && target) {
		return utilCalculateHoldings(holding.toExact(), target, decimals)
	}
	
	return 0
}

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

// account is optional
export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return new Contract(address, ABI, getProviderOrSigner(library, account) as any)
}

// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

export const formatBalance = (balance, decimals) => {
  if (!balance) return { amount: '0', decimals: '000' }
  const balances = balance?.toExact({ groupSeparator: ',' }).split('.')
  
  var defaultDecimals = '';
  while (defaultDecimals.length < decimals) {
      defaultDecimals = '0' + defaultDecimals;
  }

  
  return {
    amount: balances[0],
    decimals: balances[1] ? balances[1].substring(0, decimals) : defaultDecimals,
  }
}

// Add token to wallet
export const addTokenToWallet = () => {
  
  const addTokenToWallet = async () => {
    const request = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: process.env.REACT_APP_SAFU_TOKEN_ADDRESS,
          symbol: 'SAFU',
          decimals: 18,
          image: 'https://ceezee.io/img/favicon.png',
        },
      },
    });
    return request;
  };
  
  addTokenToWallet().then((success) => {
    console.log(success);
  }).catch((err) => {
    console.error(err);
  });
}