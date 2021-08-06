import {
    ALL_NOTIFICATION,
    CLOSE_SNACKBAR,
    ENQUEUE_SNACKBAR,
    NEW_NOTIFICATION,
    REMOVE_SNACKBAR
    } from "../actions/notification.action";
    
    const defaultState = {
        notifications: [],
    };
    
    export default function notifications(state = defaultState, action){
        switch (action.type) {
  
                
    
    // ***************************************
    
            case ENQUEUE_SNACKBAR:
                return {
                    ...state,
                    notifications: [
                        ...state.notifications,
                        {
                            key: action.key,
                            ...action.notification,
                        },
                    ],
                };
    
            case CLOSE_SNACKBAR:
                return {
                    ...state,
                    notifications: state.notifications.map(notification => (
                        (action.dismissAll || notification.key === action.key)
                            ? { ...notification, dismissed: true }
                            : { ...notification }
                    )),
                };
    
            case REMOVE_SNACKBAR:
                return {
                    ...state,
                    notifications: state.notifications.filter(
                        notification => notification.key !== action.key,
                    ),
                };
    
            default:
                return state;
        }
    };
    