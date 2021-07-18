// import { useSelector } from 'react-redux';

import UIFooter from '../components/layout/Footer';
import UIHeader from '../components/layout/Header';
import { CubeIcon } from "@heroicons/react/outline";

import { Link } from 'react-router-dom';
import { Button } from '@windmill/react-ui';

// Hooks
import { useActiveWeb3React } from '../hooks/';
import useAuth from '../hooks/useAuth.js';


// Components
import Remaining from '../components/site/Remaining';
  


export function IndexPage(props) {
  const { login, logout } = useAuth();
  const { account } = useActiveWeb3React();
  return (
    <>
      <UIHeader
        menu={props.menu}
        login={login}
        logout={logout}
        account={account || ''}
      />

      {/* TODO: Create a Layout module to house the content */}
      <div className='w-full px-5'>
        <div className='container my-16 md:my-28'>
          <div className='max-w-[700px] mx-auto text-center'>
            <h1 className="bg-clip-text bg-gradient-to-b from-primary to-primary-light text-transparent">
              Welcome to PolkaPlace!
            </h1>
            <h2>The place to mint your once in a lifetime revenue sharing NFT for PolkaParty</h2>
          </div>
          
          <Remaining />
          
        </div>
      </div>

      <UIFooter menu={props.menu} />
    </>
  );
}

export default IndexPage;