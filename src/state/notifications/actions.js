export function addNotification(id, header, content, type, icon, dismissTime) {
    return {
        type: ADD_NOTIFICATION,
        notification: {
            content: content,
            dismissTime: dismissTime,
            header: header,
            id: id,
            icon: icon,
            type: type,
        },
    };
}

export function removeNotification(id) {
    return {
        type: REMOVE_NOTIFICATION,
        id: id,
    };
}

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';