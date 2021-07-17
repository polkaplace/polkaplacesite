import { useState } from 'react';

// Hooks
import { useActiveWeb3React } from '../hooks/';
import useAuth from '../hooks/useAuth.js';
import useNotifications from '../hooks/useNotifications'
import { usePolygonpunks } from '../state/polygonpunks/hooks';

// UI
import { Button } from '@windmill/react-ui';

import UIFooter from '../components/layout/Footer';
import UIHeader from '../components/layout/Header';
import Socials from '../components/layout/Socials';

import RecentlyMinted from '../components/site/RecentlyMinted';

import ConnectButton from '../components/widgets/connectbutton/ConnectButton';
import RemainingPunks from '../components/site/RemainingPunks';

import SmokerImage from '../assets/img/smoker.png';
import Loading from '../components/svg/svg/Loading';

export function GetPolygonPunks(props) {
    const { login, logout } = useAuth();
	const { account } = useActiveWeb3React();

	const { notificationError, notificationSuccess  } = useNotifications()
	const { getPunk, getPunksRemainingToAssign } = usePolygonpunks()
	const [state, setState] = useState({
		loadingMint : false
	});

	const mintPunk = () => {
		setState({loadingMint : true});
		
		getPunk().then(() => {
			getPunksRemainingToAssign();
			setState({loadingMint : false});
			notificationSuccess(false, "PolygonPunk minted", 'Your PolygonPunk is minted, take a look at my PolygonPunks', 'success', false, 20000)
		}).catch((err) => {
			setState({loadingMint : false});
			notificationError(false, 'Error while minting (' + err.code + ')', ((err.data.message)? err.data.message : err.message) )
		});
	}

	return (
	    <>
	    	<UIHeader menu={props.menu} login={login} logout={logout} account={account || ''} />
			<div className="w-full px-5">
				<div className="container mt-16 md:my-20 text-center">
					<h5 className='text-primary'>You’re in luck. Minting is still possible</h5>
		            <h1>Mint your random <img className="inline-block" src={SmokerImage} alt="" /> PolygonPunk!</h1>
					{((account)? (
						<Button disabled={((state.loadingMint)? true : false)} size="larger" className="mt-4" onClick={() => { mintPunk() }}>
							Mint your PolygonPunk
							{((state.loadingMint)? (<Loading className='animate-spin ml-3 mr-0 h-5 w-5 text-white' />) : '')}
						</Button>	
					) : (
						<ConnectButton
							size="larger"
							className="mt-4"
							account={account}
							login={login}
							logout={logout}
						>Connect your wallet to Mint</ConnectButton>	
					))}
					<br />
					<small className="font-medium mt-5 block">Minting usually takes seconds but can take up to a few minutes</small>
				</div>


				<div className="container text-center my-10 md:my-20">
					<RemainingPunks
						mintButton={false}
					/>
				</div>

				<div className="relative -mx-5 px-5">
					<div className="w-full h-1/2 top-1/2 left-0 absolute bg-gray-50"></div>
					<div className="container mt-20 relative">
						<h2 className="h1 mx-auto text-center mb-8">Recently minted PolygonPunks</h2>
						<RecentlyMinted />
					</div>
				</div>

				<section className="-mx-5 px-5 py-10 md:py-20 bg-gray-50">
				<div className="container text-center">
					<Button layout="outline">1 PolygonPunk = 125 MATIC which equals to 3000000000 WEI</Button>
					<div className="max-w-[700px] mt-10 mx-auto">
						<p>Warning ! If you want to mint several PolygonPunks you will have to repeat the operation as many times as necessary. Please send only one payment at a time.</p>
						<p>Once your payment is validated. The PolygonPunks minting is automated. You will receive a token in your wallet within 5 minutes. Paste the Token Address in the "My PolygonPunks" section to view your unique PolygonPunks.</p>
					</div>
				</div>

				<div className="container mt-20">
					<div className="flex justify-center">
						<Socials menu={props.menu} />
					</div>
					<small className="mt-5 max-w-[400px] mx-auto block text-center">For any questions contact our team on Discord with your transaction number</small>
				</div>
				</section>
			</div>
	        <UIFooter menu={props.menu} />
		</>
    );
}

export default GetPolygonPunks;