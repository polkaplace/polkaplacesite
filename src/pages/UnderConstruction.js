import UIFooter from '../components/layout/Footer';
import UIHeader from '../components/layout/Header';

// Hooks
import { useActiveWeb3React } from '../hooks/';
import useAuth from '../hooks/useAuth.js';

export function UnserConstruction(props) {
   const { login, logout } = useAuth();
	const { account } = useActiveWeb3React();

	return (
	    <>
	      	<UIHeader menu={props.menu} login={login} logout={logout} account={account || ''} />
		    <p>Hello Punks!</p>
	        <UIFooter menu={props.menu} />
		</>
    );
    
    
    return (
	   
    );
}

export default UnserConstruction;