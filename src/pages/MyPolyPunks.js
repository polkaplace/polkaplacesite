// import React, { useState, useEffect } from 'react';

import UIFooter from '../components/layout/Footer';
import UIHeader from '../components/layout/Header';
import PunkCard from '../components/card/PunkCard';
import PunkGrid from '../components/site/PunkGrid';
import Box1 from '../assets/img/box-2.png';

// Hooks
import useAuth from '../hooks/useAuth.js';
import { useActiveWeb3React } from '../hooks/';
import { useGetPunks } from '../state/polygonpunks/hooks';


export function MyPolygonPunks(props) {
    const { login, logout } = useAuth();
	const { account } = useActiveWeb3React();

	let punksData = useGetPunks(1, 9999, 'my_punks', account);
	let punksMintedData = useGetPunks(1, 9999, 'my_minted_punks', account);
	
	return (
		<>
	    	<UIHeader menu={props.menu} login={login} logout={logout} account={account || ''} />
			<div className="w-full px-5">
				<div className='container mt-20 mb-10'>
		          <h1 className="flex">
		            <img src={Box1} alt="" className="w-7 object-contain mr-2"/> Owned PolygonPunks
		          </h1>
		        </div>
				<div className="container my-10">
					<PunkGrid>
						{((punksData.length <= 0)? 'No punks found' : '')}
						{punksData.map(function(data, i){
							return (<PunkCard key={data._id} punk={data} />)
						})}
					</PunkGrid>
				</div>
				<div className='container mt-20 mb-10'>
		          <h1 className="flex">
		            <img src={Box1} alt="" className="w-7 object-contain mr-2"/> Minted PolygonPunks
		          </h1>
		        </div>
				<div className="container my-10">
					<PunkGrid>
						{((punksMintedData.length <= 0)? 'No punk minted' : '')}
						{punksMintedData.map(function(data, i){
							return (<PunkCard key={data._id} punk={data} />)
						})}
					</PunkGrid>
				</div>
			</div>
	        <UIFooter menu={props.menu} />
		</>
    );
}
/*
<PunkCard rarity="1" />
<PunkCard rarity="1" />
<PunkCard rarity="2" />
<PunkCard rarity="2" />
<PunkCard rarity="3" />
<PunkCard rarity="3" />
<PunkCard rarity="4" />
<PunkCard rarity="5" />
*/
export default MyPolygonPunks;