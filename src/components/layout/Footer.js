import Socials from './Socials.js';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.svg';
const logo = (
	<Link to='/'>
		<img src={Logo} alt="" className="w-32 flex-shrink-0" />
	</Link>
);

const Footer = (props) => {

  return (

	  <div className="py-4 p-5 border-t">
			<div className="container flex items-center">
			{logo}
			<div className='flex items-center ml-auto'>
					<Socials menu={props.menu} />
				</div>
			</div>
		</div>

  );
};

export default Footer;
