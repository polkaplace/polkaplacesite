import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateGasMargin } from '../../utils'

import { useActiveWeb3React } from '../../hooks'
import { usePolkaPlaceContract, useUSDCContract } from '../../hooks/useContract'

import { setName, setSymbol, setClaimPrice, setImageHash, setTotalSupply, setRemainingToAssign } from './actions'


export const usePolkaplace = () => {
	const dispatch = useDispatch();
	
	const PolkaPlaceContract = usePolkaPlaceContract(true);
	const USDCContract = useUSDCContract(true);
	
	const PolkaPlaceContractAddress = process.env.REACT_APP_POLKAPLACE_CONTRACT;
	
	const { account } = useActiveWeb3React();
	const claimprice = useSelector(state => state.polkaplace.claimprice);
	
	const helpers = useMemo(() => {
		return {
			getName : async (): Promise<String | null> => {
			  if (!PolkaPlaceContract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await PolkaPlaceContract.name();
			  dispatch(setName( response.toString() ));
			  return response;
			},
			getSymbol : async (): Promise<String | null> => {
			  if (!PolkaPlaceContract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await PolkaPlaceContract.symbol()
			  dispatch(setSymbol( response.toString() ));
			  return response;
			},
			getClaimPrice : async (): Promise<Number | null> => {
			  if (!PolkaPlaceContract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await PolkaPlaceContract.claimPrice()
			  dispatch(setClaimPrice( parseInt(response) ));
			  return response;
			}, 
			getImageHash : async (): Promise<Number | null> => {
			  if (!PolkaPlaceContract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await PolkaPlaceContract.imageHash()
			  dispatch(setImageHash( response ));
			  return response;
			}, 
			
			getTotalSupply : async () : Promise<Amount | null> => {
			  if (!PolkaPlaceContract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await PolkaPlaceContract.totalSupply();
			  dispatch(setTotalSupply( parseInt ( response.toString() ) ));
			  return response;
			},
			getRemainingToAssign: async (): Promise<Amount | null> => {
			  if (!PolkaPlaceContract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await PolkaPlaceContract.apesRemainingToAssign()
			  dispatch(setRemainingToAssign( parseInt ( response.toString() ) ));
			  return response;
			},
			
			getApe : async (fnAprove, fnTransaction, fnAproveMinting, fnMining): Promise<Amount | null> => {
			  if (!PolkaPlaceContract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  if (!account) return Promise.reject({message: 'You need to be connected to a wallet.'});
			  
			  try{
				  const nmbr = claimprice;
				  const hex = '0x' + nmbr.toString(16);
				  fnAprove();
				  const estimateGasUSDC = await USDCContract.estimateGas.approve(PolkaPlaceContractAddress, hex);
				  const approve 		= await USDCContract.approve(PolkaPlaceContractAddress, hex, {
					gasLimit: calculateGasMargin(estimateGasUSDC),
				  });
				  
				  fnTransaction();
				  await approve.wait();
				  
				  // Do mint
				  fnAproveMinting();
				  const estimateGas = await PolkaPlaceContract.estimateGas.mint({
					  from: account,
				  });
				
				  const tx = await PolkaPlaceContract.mint({
				  	from: account,
				  	gasLimit: estimateGas
				  });
				  
				  fnMining();
				  const response = await tx.wait(); 
				  return response;
				 
			  }catch(err){
				  return Promise.reject(err);
			  }	  
			},		
			getBalanceOf : async (): Promise<Amount | null> => {
			  if (!PolkaPlaceContract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await PolkaPlaceContract.balanceOf(account)
			  
			  return response;
			},
			getApesOfferedForSale : async (): Promise<Amount | null> => {
			  if (!PolkaPlaceContract) return Promise.resolve({message: 'Contract not found.', code: 404});
			
			  const response = await PolkaPlaceContract.apesOfferedForSale(10);
			  return response;
			},
			getOwner : async (): Promise<Amount | null> => {
			  if (!PolkaPlaceContract) return Promise.resolve({message: 'Contract not found.', code: 404});
			
			  const response = await PolkaPlaceContract.owner();
			  return response;
			},
			getAllAssigned: async (): Promise<Boolean | null> => {
			  if (!PolkaPlaceContract) return Promise.resolve({message: 'Contract not found.', code: 404});
			  const response = await PolkaPlaceContract.allApesAssigned()
			  dispatch(setRemainingToAssign( response));
			  return response;
			},
		}
	}, [dispatch, account, PolkaPlaceContract, PolkaPlaceContractAddress, USDCContract, claimprice])

	return helpers
}