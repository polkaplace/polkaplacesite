import { Modal, ModalBody, ModalFooter } from '@windmill/react-ui'
import { BeakerIcon } from "@heroicons/react/solid";

import config from "./config";
import WalletRow from "./WalletRow";

// 'Element': type, props, key

function ConnectModal({open, handleClose, login}){
	return (
	<>
		<Modal isOpen={open} onClose={handleClose}>
			<ModalBody>
				<div className="w-full mx-auto">
					{config.map((entry, index) => (
				      <WalletRow
				        key={entry.title}
				        login={login}
				        walletConfig={entry}
						onDismiss={handleClose}
					  />
				    ))}
				</div>
			</ModalBody>
			
			<ModalFooter>
				<a className="flex items-center w-full justify-center text-xs" href="https://docs.pancakeswap.finance/help/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain" target="_blank" rel="noreferrer"><BeakerIcon className='h-5 w-5 informationCircle mr-1' />Learn how to connect your wallet</a>
			</ModalFooter>
		</Modal>
	
		
	</>
  )
}

export default ConnectModal
