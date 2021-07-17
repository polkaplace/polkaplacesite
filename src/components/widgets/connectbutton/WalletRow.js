import PropTypes from 'prop-types';
import { Button } from '@windmill/react-ui'

const WalletRow = (props) => {
	const { title, icon: Icon } = props.walletConfig;
	return (
		<Button block
			id={`wallet-connect-${title.toLocaleLowerCase()}`}
			name={title}
			layout="outline"
			onClick={() => {
				props.login(props.walletConfig.connectorId, props.walletConfig);
				props.onDismiss();
			}}
			className='my-1'
        >
          <Icon className='h-5 w-5 mr-2 -ml-1' />
          {title}
        </Button>
	)
}

WalletRow.propTypes = {
    onDismiss: PropTypes.func,
    login: PropTypes.func.isRequired,
    walletConfig: PropTypes.object.isRequired,
};

export default WalletRow