import React from 'react'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { NetworkContextName } from './../../constants'
import getLibrary from './../../utils/Web3/getLibrary'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
	  	{children}
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  )
}

export default Providers