import { useCallback } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import { NoEthereumProviderError, UserRejectedRequestError as UserRejectedRequestErrorInjected} from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect, WalletConnectConnector} from '@web3-react/walletconnect-connector'

import useNotifications from './useNotifications'

import { connectorsByName, connectorLocalStorageKey, ConnectorNames  } from '../connectors'

const useAuth = () => {
	const { activate, deactivate } = useWeb3React()
	const { notificationError } = useNotifications()
	
	const logout = () => {
		window.localStorage.removeItem(connectorLocalStorageKey);
		deactivate();
	};
	
	const login = useCallback((connectorID: ConnectorNames) => {
		const connector = connectorsByName[connectorID]
		
		if (!connector) {
			notificationError(false, "Can't find connector", 'The connector config is wrong')
		}else{
		
			window.localStorage.setItem(connectorLocalStorageKey, connectorID); // Dont know if this can be here in the error..
			activate(connector, async (error: Error) => {
				window.localStorage.removeItem(connectorLocalStorageKey);
				
				if (error instanceof UnsupportedChainIdError) {
					notificationError(false, 'Unsupported Chain Id', 'Unsupported Chain Id Error. Check your chain Id.')
				} else if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
					notificationError(false, 'Provider Error', 'No provider was found')
				} else if (
					error instanceof UserRejectedRequestErrorInjected ||
					error instanceof UserRejectedRequestErrorWalletConnect
				) {
				
					if (connector instanceof WalletConnectConnector) {
						const walletConnector = connector; // as WalletConnectConnector
						walletConnector.walletConnectProvider = null
					}
				
					notificationError(false, 'Authorization Error', 'Please authorize to access your account')
				} else {
					notificationError(false, error.name, error.message)
				}
			})
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	return { login, logout}
}

export default useAuth
