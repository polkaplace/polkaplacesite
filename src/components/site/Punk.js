import { Link } from 'react-router-dom';
import { getRarityColor } from '../../constants/punks';

const Punk = (props) => {
	const isFirefox = typeof InstallTrigger !== 'undefined';
	
	if(!props.punk){
		return '';
	}
	
	const cardStyle = {
		backgroundColor: getRarityColor(props?.punk?.total_score || 5)
	}
	
	let size = ((props.size)? props.size : 'medium' );
	
	const punkStyle = {
		width: 24,
		height: 24,
		
		display: 'inline-block',
		background: 'url(/img/punks.png)',
		overflow: 'hidden',
		'imageRendering': ((isFirefox)? '-moz-crisp-edges' : 'pixelated') ,
	}
	
	if(size === 'medium'){
		punkStyle.width = 48;
		punkStyle.height = 48;
		punkStyle.zoom = 2;
		punkStyle['MozTransform'] = 'scale(2)';
		punkStyle['MozTransformOrigin'] = '0 0';
		
	}
	
	if(size === 'large'){
		punkStyle.width = 128;
		punkStyle.height = 128;
		
		punkStyle.zoom = 5.4;
		punkStyle['MozTransform'] = 'scale(5.4)';
		punkStyle['MozTransformOrigin'] = '0 0';
	}

	// Position math

	var l = parseInt(props?.punk?.id) / 100;
	var y = Math.floor(l) * -24;
	var x = (props?.punk?.id - ( Math.floor(l)*100 )) * -24;
	
	// set position
	punkStyle.backgroundPosition = x + 'px ' + y + 'px';
	
	let punkContainerStyle = {
		width : punkStyle.width,
		height : punkStyle.height,
		overflow: 'hidden'
	}
	
	return (
		<div className='flex items-center text-sm' style={cardStyle}>
			<Link to={'/punks/' + props?.punk?.id} className="flex items-center text-primary underline hover:text-primary-hover">
				<div style={punkContainerStyle}>
					<div className="punk" style={punkStyle}></div>
				</div>
			</Link>
		</div>
	);
};

export default Punk;
