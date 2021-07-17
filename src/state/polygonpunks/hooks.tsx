import { useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import POLYPUNKS_ABI from '../../constants/contracts/abis/polygonpunks.json'

import { useActiveWeb3React } from '../../hooks'
import { useContract } from '../../hooks/useContract'

import { setName, setSymbol, setClaimPrice, setImageHash, setTotalSupply, setPunksRemainingToAssign } from './actions'

export function usePolypunksContract(withSignerIfPossible = false): Contract | null {
	const contractAddress = process.env.REACT_APP_POLYPUNKS_CONTRACT;
	return useContract(contractAddress, POLYPUNKS_ABI, withSignerIfPossible);
}

export const usePolygonpunks = () => {
	const dispatch = useDispatch();
	
	const Contract = usePolypunksContract(true);
	const { account } = useActiveWeb3React();
	const claimprice = useSelector(state => state.polygonpunks.claimprice);
	
	
	const helpers = useMemo(() => {
		return {
			getName : async (): Promise<String | null> => {
			  if (!Contract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await Contract.name()
			  dispatch(setName( response.toString() ));
			  return response;
			},
			getSymbol : async (): Promise<String | null> => {
			  if (!Contract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await Contract.symbol()
			  dispatch(setSymbol( response.toString() ));
			  return response;
			},
			getClaimPrice : async (): Promise<Number | null> => {
			  if (!Contract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await Contract.claimPrice()
			  dispatch(setClaimPrice( parseInt(response) ));
			  return response;
			}, 
			getImageHash : async (): Promise<Number | null> => {
			  if (!Contract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await Contract.imageHash()
			  dispatch(setImageHash( response ));
			  return response;
			}, 
			
			getTotalSupply : async () : Promise<Amount | null> => {
			  if (!Contract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await Contract.totalSupply();
			  dispatch(setTotalSupply( parseInt ( response.toString() ) ));
			  return response;
			},
			getPunksRemainingToAssign: async (): Promise<Amount | null> => {
			  if (!Contract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await Contract.punksRemainingToAssign()
			  dispatch(setPunksRemainingToAssign( parseInt ( response.toString() ) ));
			  return response;
			},
			
			getPunk : async (): Promise<Amount | null> => {
			  if (!Contract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  if (!account) return Promise.reject({message: 'You need to be connected to a wallet.'});
			  
			  try{
				  
				  let nmbr = claimprice;
				  let hex = '0x' + nmbr.toString(16);
				  const estimateGas = await Contract.estimateGas.mint({from: account, value: hex });
				  
				  const tx = await Contract.mint({
				  	from: account,
				  	value: hex,
				  	gasLimit: estimateGas
				  });
				  const response = await tx.wait(); 
				  return response;
				 
			  }catch(err){
				  return Promise.reject(err);
			  }	  
			},
			getBalanceOf : async (): Promise<Amount | null> => {
			  if (!Contract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await Contract.balanceOf(account)
			  
			  return response;
			},
			getPunksOfferedForSale : async (): Promise<Amount | null> => {
			  if (!Contract) return Promise.resolve({message: 'Contract not found.', code: 404});
			
			  const response = await Contract.punksOfferedForSale(10);
			  return response;
			},
			getOwner : async (): Promise<Amount | null> => {
			  if (!Contract) return Promise.resolve({message: 'Contract not found.', code: 404});
			
			  const response = await Contract.owner();
			  return response;
			},
			getAllPunksAssigned: async (): Promise<Boolean | null> => {
			  if (!Contract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await Contract.allPunksAssigned()
			  /* dispatch(setPunksRemainingToAssign( response)); */
			  return response;
			},
		}
	}, [dispatch, account, Contract, claimprice])

	return helpers
}

// Api
const api = process.env.REACT_APP_BACKEND_URL;

export const useGetPunks = (page, limit, sort, q) => {
	const [data, setData] = useState<ApiResponse | null>(null);
	
	useEffect(() => {
		const fetchData = async (page, limit, sort, q) => {
			try {
				const urlString= api + '/punks';
				const Url = new URL(urlString);

				if(page > 0){
					Url.searchParams.append("page", page);
				}
				if(limit > 0){
					Url.searchParams.append("limit", limit);
				}
				if(sort){
					Url.searchParams.append("sort", sort);
				}
				if(q){
					Url.searchParams.append("q", q);
				}
			
				const response = await fetch(Url);
				const res: ApiResponse = await response.json();
			
				setData(res)
			} catch (error) {
				console.error('Unable to fetch Punks data:', error)
			}
		}
		fetchData(page, limit, sort, q)
	
	}, [page, limit, sort, q, setData])
	
	return data || [];
}
export const useGetPunk = (id) => {
	const [data, setData] = useState<ApiResponse | null>(null);
	
	useEffect(() => {
		const fetchData = async (id) => {
			try {
				const urlString= api + '/punks/' + id;
				const Url = new URL(urlString);
				const response = await fetch(Url);
				const res: ApiResponse = await response.json();
			
				setData(res)
			} catch (error) {
				console.error('Unable to fetch Punk data:', error)
			}
		}
		
		fetchData(id)
	}, [id, setData])
	
	return data || [];
}

export const useGetAttributes = () => {
	const [data, setData] = useState<ApiResponse | null>(null);
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(api + '/attributes');
				const res: ApiResponse = await response.json();
			
				setData(res)
			} catch (error) {
				console.error('Unable to fetch Attributes data:', error)
			}
		}
		
		fetchData()
	}, [setData])
	
	return data
}
	
export const useGetTypes = () => {
	const [data, setData] = useState<ApiResponse | null>(null);
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(api + '/types');
				const res: ApiResponse = await response.json();
			
				setData(res)
			} catch (error) {
				console.error('Unable to fetch Attributes data:', error)
			}
		}
		
		fetchData()
	}, [setData])
	
	return data
}
export const useGetType = (type) => {
	const [data, setData] = useState<ApiResponse | null>(null);
	
	useEffect(() => {
		const fetchData = async (type) => {
			if(type){
				try {
					const response = await fetch(api + '/types/' + type);
					const res: ApiResponse = await response.json();
				
					setData(res)
				} catch (error) {
					console.error('Unable to fetch type data:', error)
				}
			}
		}
		
		fetchData(type)
	}, [type, setData])
	
	return data
}

export const useGetAttributeCount = () => {
	const [data, setData] = useState<ApiResponse | null>(null);
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(api + '/attributecount');
				const res: ApiResponse = await response.json();
			
				setData(res)
			} catch (error) {
				console.error('Unable to fetch Attributecount data:', error)
			}
		}
		
		fetchData()
	}, [setData])
	
	return data
}
			  
/*
	X getPunk
	X balanceOf
	X punksOfferedForSale
	allPunksAssigned
	
	acceptBidForPunk
	allInitialOwnersAssigned
	buyPunk
	enterBidForPunk
	offerPunkForSale
	offerPunkForSaleToAddress
	punkNoLongerForSale
	
	setInitialOwner
	setInitialOwners
	
	transferPunk
	withdraw
	withdrawBidForPunk
	
	claimPrice
	
	imageHash
	nextPunkIndexToAssign
	owner
	pendingWithdrawals
	punkBids
	punkIndexToAddress
	
*/