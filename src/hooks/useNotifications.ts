import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { addNotification, removeNotification } from '../state/notifications/actions'

// Notifications
const useNotifications = () => {
	const dispatch = useDispatch()

	const helpers = useMemo(() => {
		return {
			
			// Shortcuts
			notificationSuccess: (id: string, header: string, content?: string, type?: string, icon?: string, dismissTime?: number) => {
				dispatch(addNotification(id, header, content, type || 'success', icon || false, dismissTime || 3000));
			},
			notificationError: (id: string, header: string, content?: string) => {
				dispatch(addNotification(id, header, content, 'danger', false, 30000));
			},
			notificationWarning: (id: string, header: string, content?: string) => {
				dispatch(addNotification(id, header, content, 'warning', false, 3000));
			},
			
			// Full Functions
			addNotification: (id, header, content, type, icon, dismissTime) => dispatch(addNotification(id, header, content, type, icon, dismissTime)),
			removeNotification: (id: string) => dispatch(removeNotification(id)),
		}
	}, [dispatch])

	return helpers
}

export default useNotifications