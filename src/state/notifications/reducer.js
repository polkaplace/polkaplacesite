import {ADD_NOTIFICATION, REMOVE_NOTIFICATION} from './actions';

const initialState = [];

const notificationsReducer = (state = initialState, action) => {
		switch (action.type) {
        
        case ADD_NOTIFICATION:
        	let date = (new Date());
        	action.notification.id = ((action.notification.id)? action.notification.id : 'notId-' + (date).getTime() ); 
        
        	return [...state, action.notification];
        case REMOVE_NOTIFICATION:
            return  state.filter(notification => notification.id !== action.id);
        default:
            return state;
    }
}

export default notificationsReducer; 