import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addNotification, removeNotification} from '../../state/notifications/actions';

import Notification from './Notification.js';
import './Notifications.css';

class Notifications extends Component {
	render() {
		return (
			<div className={`notification-container ${this.props.position}`}>
				{
					this.props.notifications.map((message, i) => 
						<Notification
							key={message.id}
							id={message.id}
							position={this.props.position}
							type={message.type}
							onDismiss={() => this.deleteNotifications(message.id)}
							icon={message.icon}
							header={message.header}
							content={message.content}
							size={message.size || false}
							dismissTime={message.dismissTime || this.dismissTime || false}
						/>
					)
				}
			</div>
		);
	}

	addNotification = (id, title, description, type, icon, dismissTime) => {
		this.props.addNotification(id, title, description, type, icon, dismissTime);
	}

	deleteNotifications = id => {
		// Retain all but the one with the id that was clicked
		this.props.removeNotification(id);
	}
}

// Here you can add properties to the props
const mapStateToProps = (state) => {
    return {
        notifications: state.notifications,
    };
};

// Here you can add actions to the props (basically methods)
const mapDispatchToProps = {
    addNotification: addNotification,
    removeNotification: removeNotification,
};

// It's important to "connect" it
export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
