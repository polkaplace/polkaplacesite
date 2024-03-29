import { useEffect, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { usePolkaplace } from './hooks';
import useDebounce from '../../hooks/useDebounce'
import { useActiveWeb3React } from '../../hooks'
import useIsWindowVisible from '../../hooks/useIsWindowVisible'

export default function Updater(): null {	
	const { library, chainId } = useActiveWeb3React()
	const windowVisible = useIsWindowVisible()
	  
	const { getName, getSymbol, getStandard, getDecimals, getClaimPrice, getImageHash, getTotalSupply, getRemainingToAssign } = usePolkaplace();
	
	const [state, setState] = useState<{ chainId: number | undefined; blockNumber: number | null }>({
		chainId,
		blockNumber: null,
	})
	
	const blockNumberCallback = useCallback((blockNumber: number) => {
		setState((s) => {
			if (chainId === s.chainId) {
				if (typeof s.blockNumber !== 'number') return { chainId, blockNumber }
				return { chainId, blockNumber: Math.max(blockNumber, s.blockNumber) }
			}
			return s
		})
	}, [chainId, setState])
	
	const name = useSelector(state => state.polkaplace.name);
	const symbol = useSelector(state => state.polkaplace.symbol);
	const standard = useSelector(state => state.polkaplace.standard);
	const decimals = useSelector(state => state.polkaplace.decimals);
	const claimprice = useSelector(state => state.polkaplace.claimprice);
	const imagehash = useSelector(state => state.polkaplace.imagehash);
	
	useEffect(() => {
		
		if(!name){ getName(); }
		if(!symbol){ getSymbol(); }
		if(!claimprice){ getClaimPrice(); }
		if(!imagehash){ getImageHash(); }

		getTotalSupply();
		getRemainingToAssign();
		
		library.on('block', blockNumberCallback)
		return () => {
			library.removeListener('block', blockNumberCallback)
		}
	}, [getName, getSymbol, getStandard, getDecimals, getClaimPrice, getImageHash, getTotalSupply, getRemainingToAssign,
		name, symbol, standard, decimals, claimprice, imagehash, blockNumberCallback, library ])
    
	const debouncedState = useDebounce(state, 100)
	
	useEffect(() => {
		if (!debouncedState.chainId || !debouncedState.blockNumber || !windowVisible) return
		getRemainingToAssign();
	}, [debouncedState.blockNumber, debouncedState.chainId, getRemainingToAssign, windowVisible])
    
	return null
}
