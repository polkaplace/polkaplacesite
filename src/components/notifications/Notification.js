import React, {  Component } from 'react';

import PropTypes from 'prop-types';
import { Alert } from '@windmill/react-ui'

import './Notification.css';

class Notification extends Component {
   
    constructor(props) {
        super(props);

        this.intervalSelfDestruct = false;
        
		this.icon = this.props.icon || false;
		this.size = this.props.size || 'small';
		
		this.state = {
			time : 0,
			pause: true
		}
    }
	
	setSelfDestruct = () => {
		if(this.props.dismissTime > 0){
			this.setState({time : this.props.dismissTime, pause: false});
			this.intervalSelfDestruct = setTimeout(() => {
				clearTimeout(this.intervalSelfDestruct);
				this.intervalSelfDestruct = false;
				
				this.props.onDismiss();
				// this.intervalSelfDestruct = false;
			}, this.props.dismissTime);
		}
	}
	removeSelfDestruct = () => {
	    if(this.props.dismissTime > 0
	    && this.intervalSelfDestruct){
			// ReSet animation on the time notification-timeline
			this.setState({pause: true});
			clearTimeout(this.intervalSelfDestruct);
			this.intervalSelfDestruct = false;
		}
	}
	
	mouseOut = () => {
		this.setSelfDestruct();
    }
    mouseOver = () => {
	    this.removeSelfDestruct();
    }
    
	componentDidMount () {
		this.setSelfDestruct();
	}
	componentWillUnmount() {
		this.removeSelfDestruct();
	}
	
    render() {
	   
		const style = ((!this.state.pause)? {animationName : "animation-timeline", animationDuration : this.state.time + 'ms' } : {} );
		return (
		    
	    	<Alert
				className={`notification icon ${this.props.position}`}
				
				type={this.props.type}
				
				id={this.props.id}
				key={this.props.id}
							
				onClose={this.props.onDismiss}
				
				onMouseLeave={() => this.mouseOut()}
				onMouseEnter={() => this.mouseOver()}
				
				size={this.size}
			>
				{(this.icon)? (<i aria-hidden="true" className={`${this.icon} icon`}></i>) : (<></>)}
				
				<div className="content">
					<div className="header">{this.props.header}</div>
					<div className="message">{this.props.content}</div>
				</div>
				
				{(this.props.dismissTime > 0)? (<div className="notification-timeline" style={style}></div>) : (<></>)}
			</Alert>
		
		);
	}   
};

Notification.propTypes = {
    content: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired,
};

export default Notification;