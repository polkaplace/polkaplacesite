import { SET_NAME, SET_SYMBOL, SET_STANDARD, SET_DECIMALS, SET_CLAIMPRICE, SET_IMAGEHASH, SET_TOTALSUPLY, SET_REMAININGTOASSIGN } from './actions';

const initialState = {
	totalsuply: 0,
	remainingtoassign: 0,
	symbol: '',
	standard: '',
	name: '',
	decimals: '',
	claimprice: 0,
	imagehash: ''
};

const polkaplace = (state = initialState, action) => {
	switch (action.type) {
        
        // Set currentgame
        case SET_NAME:
			return {...state, name: action.name};
	    
		case SET_SYMBOL:
			return {...state, symbol: action.string};
		
		case SET_STANDARD:
			return {...state, standard: action.standard};
	    
		case SET_DECIMALS:
			return {...state, decimals: action.decimals};
			
	   case SET_CLAIMPRICE:
			return {...state, claimprice: action.integer};
			
	   case SET_IMAGEHASH:
			return {...state, imagehash: action.imagehash};
			
	    case SET_TOTALSUPLY:
        	return {...state, totalsuply: action.total};
        	
        case SET_REMAININGTOASSIGN:
        	return {...state, remainingtoassign: action.total};

        // Defualt
        default:
            return state;
    }
}

export default polkaplace; 