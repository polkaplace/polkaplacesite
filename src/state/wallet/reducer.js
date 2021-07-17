import {SET_TOKENVALUE} from './actions';

const initialState = {
	SAFU : {
		balance: 0,
		readable: 0,
	},
};

const wallet = (state = initialState, action) => {
		switch (action.type) {
        
        // Set currentgame
        case SET_TOKENVALUE:
        	return {...state, [action.token]: { balance: action.balance, readable: action.readable }};
       
        // Defualt
        default:
            return state;
    }
}

export default wallet; 