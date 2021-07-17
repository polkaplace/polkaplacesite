import { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';

import UIFooter from '../components/layout/Footer';
import UIHeader from '../components/layout/Header';
import OpenseaLogo from '../assets/img/opensea.png';


import RecentlyMinted from '../components/site/RecentlyMinted';

import {  Button } from '@windmill/react-ui';

import { getRarityColor } from '../constants/punks';
import { useGetPunk, useGetType } from '../state/polygonpunks/hooks';

// Hooks
import { useActiveWeb3React } from '../hooks/';
import useAuth from '../hooks/useAuth.js';

export function Punk(props) {
	const { login, logout } = useAuth();
	const { account } = useActiveWeb3React();
	let { slug } = useParams();
	
	let punkData = useGetPunk(slug);
	let typeData = useGetType(punkData?.type);
	
	const color = getRarityColor(punkData?.total_score || 0);
	const cardStyle = {
		backgroundColor: color
	}
	
	let openseaUrl = "https://opensea.io/assets/matic/" + process.env.REACT_APP_POLYPUNKS_CONTRACT + "/" + punkData.id;
	
	let mintDate = new Date(punkData?.mint_date);
	let isMinted = false;
	if(mintDate > new Date(2000) ){
		isMinted = true;
	}
	
	// Scrol to top
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	
	return (
		<>
			<UIHeader
				menu={props.menu}
				login={login}
				logout={logout}
				account={account || ''}
			/>
			<div className='w-full bg-primary px-5' style={cardStyle}>
				{((punkData.id)? <img src={process.env.REACT_APP_BACKEND_URL + '/img/punks-350/punk' + ("00000000" + punkData.id).slice(-4) + '.png'} className='w-[280px] md:w-[350px] h-[280px] md:h-[350px] flex-shrink-0 mx-auto' alt='' style={{imageRendering : 'crisp-edges'}} />: '' )}
			</div>
			<div className='container-sm py-4 relative z-10 flex items-center justify-between border-b px-5 lg:px-0'>
					<Link to='/punks' className='text-sm block'>
						← All Punks
					</Link>
					{((isMinted)? (
					<a href={openseaUrl} target='_blank' rel='noreferrer'>
						<Button size="small" layout="outline"><img src={OpenseaLogo} className="w-5 mr-1" alt="" /> View on Opensea</Button>
					</a>
					) : '' )}
				</div>
			<div className="w-full px-5 py-10">
				<div className='container-sm'>
					<div className='mb-8'>
						<div className='h1 items-center sm:flex'>PolygonPunk <span style={{ color: color }}>#{punkData.id}</span> 
						{/* <div className="flex items-center sm:ml-2"><span className="inline-block rounded-full text-xs font-medium px-3 py-1 bg-green-200 text-green-600">For Sale</span> <span className="inline-block rounded-full text-xs font-medium px-3 py-1 bg-yellow-200 text-yellow-600 ml-2">Active Bid</span></div> */}
						</div>
						<div className='h4 mt-1'>One of {typeData?.amount || ''} {typeData?.name || ''} PolygonPunks</div>
					</div>
					<div>
						<h2>Accessories ({punkData.amountAttributes})</h2>
						<div className="grid sm:grid-cols-3 gap-5">
							{((punkData.attributes)? punkData.attributes.map(function(a, i){
								return (
									<div key={i}>
										<h4 className="mb-0">{a.name}</h4>
										<p>{a.amount} Punks have this</p>
									</div>

								);
							}): '' )}
						</div>
					</div>
					<div className="flex justify-between items-center mt-10 py-3">
						<h2 className="my-0">Transaction History</h2>
						
					</div>
					{((isMinted)? (
						<a href={openseaUrl} target='_blank' rel='noreferrer'>
							<Button size="small" layout="outline"><img src={OpenseaLogo} className="w-5 mr-1" alt="" /> <div className="hidden sm:inline">View on </div>Opensea</Button>
						</a>
					) : (
						<>
							<p></p>
							<Link to="/get">
						        <Button size="small">Punk not minted, mint your PolygonPunk here</Button>
							</Link>
						</>
					))}
{/*
      <div className='-mx-5 sm:mx-0'>
            <TableContainer>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>From</TableCell>
                    <TableCell>To</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Txn</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableCell><span>Transaction log</span></TableCell>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
*/}
					
	        	</div>
			</div>

			<div className="relative px-5">
				<div className="w-full h-1/2 top-1/2 left-0 absolute bg-gray-50"></div>
				<div className="container mt-20 pb-20 relative z-10">
					<h2 className="h1 mx-auto text-center mb-8">Recently minted PolygonPunks</h2>
					<div className="relative">
						<RecentlyMinted />
					</div>
				</div>
			</div>
		  <UIFooter menu={props.menu} />
		</>
	);
}

export default Punk;
