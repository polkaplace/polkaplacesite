import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setTokenBalance } from './actions'
import { Token } from '@pancakeswap-libs/sdk'

// State
import { useCurrencyBalance, /* useTokenBalance */ } from './hooks'
import { useActiveWeb3React } from '../../hooks'

import { formatBalance } from '../../utils/token'; 

export default function Updater(): null {
	const dispatch = useDispatch()
	const { account, chainId } = useActiveWeb3React()
	
	let tokenAddress = process.env.REACT_APP_SAFU_TOKEN_ADDRESS;
	
	// Tokens
    const token = new Token(chainId, tokenAddress, 18, "SAFU", "CEEZEE");
  
    // Balance of the current token
    const balance 			= useCurrencyBalance(account ?? undefined, token);
    const balanceFormated 	= formatBalance(balance, 3);
    
    useEffect(() => {
    	dispatch(setTokenBalance('SAFU', parseFloat( balance?.toExact({ groupSeparator: '' }) || 0 ), balanceFormated.amount + '.' +  balanceFormated.decimals));
	}, [dispatch, balance, balanceFormated])
	
	return null
}
