import { useMemo } from 'react'

import { Contract } from '@ethersproject/contracts'
import { ChainId, WETH } from '@pancakeswap-libs/sdk'

import { getContract } from '../utils/token/'
import { useActiveWeb3React } from '../hooks/'


import ENS_ABI from '../constants/contracts/abis/ens-registrar.json'
import ENS_PUBLIC_RESOLVER_ABI from '../constants/contracts/abis/ens-public-resolver.json'
import { ERC20_BYTES32_ABI } from '../constants/contracts/abis/erc20'
import ERC20_ABI from '../constants/contracts/abis/erc20.json'
import WETH_ABI from '../constants/contracts/abis/weth.json'
import { MULTICALL_ABI, MULTICALL_NETWORKS } from '../constants/contracts/multicall'


// returns null on errors
export function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
	const { library, account } = useActiveWeb3React()
	return useMemo(() => {
		if (!address || !ABI || !library) return null
		try {
  		let c = getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined);
			return c;
		} catch (error) {
			console.error('Failed to get contract', error)
			return null
		}
	}, [address, ABI, library, withSignerIfPossible, account])
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
	return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export function useWETHContract(withSignerIfPossible?: boolean): Contract | null {
	const { chainId } = useActiveWeb3React()
	return useContract(chainId ? WETH[chainId].address : undefined, WETH_ABI, withSignerIfPossible)
}

export function useENSRegistrarContract(withSignerIfPossible?: boolean): Contract | null {
	const { chainId } = useActiveWeb3React()
	let address: string | undefined
	if (chainId) {
		switch (chainId) {
			case ChainId.MAINNET:
			case ChainId.BSCTESTNET:
		}
	}
	return useContract(address, ENS_ABI, withSignerIfPossible)
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean): Contract | null {
	return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
	return useContract(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}


export function useMulticallContract(): Contract | null {
	const { chainId } = useActiveWeb3React()
	return useContract(chainId && MULTICALL_NETWORKS[chainId], MULTICALL_ABI, false)
}