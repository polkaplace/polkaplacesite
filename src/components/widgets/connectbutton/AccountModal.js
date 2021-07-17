import React from 'react'

import { Modal, ModalBody, ModalFooter } from '@windmill/react-ui'
import { ClipboardIcon, EyeIcon } from "@heroicons/react/outline";

function AccountModal({open, handleClose, account, logout}) {

	const bscscanHref = 'https://polygonscan.com/address/' + account;
	const toCopy = account;
	
	// const [isDisplay, openTooltip] = useState(false);
	
	const copyToClipboardWithCommand = (content) => {
	    const el = document.createElement("textarea");
	    el.value = content;
	    document.body.appendChild(el);
	    el.select();
	    document.execCommand("copy");
	    document.body.removeChild(el);
	  };
	
	const contextRef = React.useRef()
	//const openTooltip = false;

	return (
	<>
		<Modal isOpen={open} onClose={handleClose}>
			<ModalBody>
				<center>
					<small className="mb-0">Connected address</small>
					<p className="font-semibold break-all">{account}</p>
					<hr className="my-5" />
					<div className="flex space-x-5 w-full justify-center">
						<button className="flex items-center" href={bscscanHref} target='_blank' rel='noreferrer'><EyeIcon className='opacity-50 w-4 link mr-1' /> View on Polygonscan</button>
				
						<button className="flex items-center relative" style={{cursor: 'pointer'}} id="copy" ref={contextRef} onClick={() => {
							if (navigator.clipboard && navigator.permissions) {
								navigator.clipboard.writeText(toCopy);
// 								openTooltip(true)
							} else if (document.queryCommandSupported("copy")) {
								copyToClipboardWithCommand(toCopy);
// 								openTooltip(true);
							}
							return false;
					      }}><ClipboardIcon className='opacity-50 w-4 link mr-1' /> Copy Address
								
								{/* TODO: Make this appear once a user clicks copy address */}
								{/* {openTooltip ?? */}
								{/* <div className="absolute top-full left-1/2 -translate-x-1/2 bg-dark-900 rounded px-2 mt-1 py-1 text-xs text-white w-[150px]">Copied to clipboard!</div> */}
								{/* } */}
								</button>
					</div>
				</center>
			</ModalBody>
			<ModalFooter>
				<center>
					<button 
						className="ui button primary text-xs"
						onClick={() => { logout(); handleClose(); }}
					>Logout</button>
				</center>
			</ModalFooter>
		</Modal>
	</>
  )
  
/*
	<Popup
		inverted
		position='top center'
		content='Copied'
		onClose={() => openTooltip(false)}
		onOpen={() => openTooltip(true)}
		open={isDisplay}
		context={contextRef}
		inline
    />
*/

}

export default AccountModal
