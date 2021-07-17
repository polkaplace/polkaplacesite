import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SmokerImage from '../../assets/img/smoker.png';
import { Button } from '@windmill/react-ui';

export function RemainingPunks(props) {
	
	const punksremainingtoassign = useSelector(state => state.polygonpunks.punksremainingtoassign);

	return (
	    <>
		<div className="rounded-full bg-header text-white py-5 sm:py-7 px-10 w-auto sm:inline-flex relative">
			<div className="sm:flex items-center mb-4 sm:mb-0">
				<img src={SmokerImage} alt="" className="mx-auto mb-2 sm:mb-0" />
				<h3 className="text-white mb-0 ml-3">PolygonPunks remaining</h3>
			</div>
			<div className="flex items-center sm:ml-10 justify-center">
				<span className="text-3xl border-b border-primary">{punksremainingtoassign.toLocaleString()}</span>
				<span className="ml-2 opacity-75">/ {(10000).toLocaleString()}</span>
			</div>
			{((props.mintButton)? 
				(<Link to="/get"><Button to="/get" className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" onClick={props.doMint}>Go to mint yours</Button></Link>) 
				: 
				''
			)}
			</div>
	    </>
	);
}

RemainingPunks.propTypes = {
    mintButton: PropTypes.bool.isRequired,
};

export default RemainingPunks;
