// import { useSelector } from 'react-redux';

import UIFooter from '../components/layout/Footer';
import UIHeader from '../components/layout/Header';
import { CubeIcon } from "@heroicons/react/outline";

import HpBg from '../assets/img/hp-bg.jpg';
import PolkaNft from '../components/cards/PolkaNft';

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
      <div className='w-full px-5 relative overflow-hidden'>
        <img src={HpBg} className="w-full top-0 absolute left-0" alt="" />
        <div className='container py-16 md:py-28 md:pb-16 relative'>
          <div className='max-w-[700px] mx-auto text-center relative'>
            <h1 className="bg-clip-text bg-gradient-to-b from-primary to-primary-light text-transparent">
              Welcome to PolkaPlace!
            </h1>
            <h2>The place to mint your once in a lifetime revenue sharing NFT for PolkaParty</h2>
          </div>
          
          {/* <Remaining />
          <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-bold focus:outline-none hover:shadow font-sans px-7 py-2 rounded-full text-sm text-white bg-primary bg-gradient-to-b from-primary to-primary-light border border-transparent active:bg-primary-hover hover:bg-primary-hover w-full" type="button">Mint</button> */}
        </div>
      </div>

      <div className="w-full px-5 bg-secondary justify-center relative mb-20">
        <div className="w-full h-16 absolute top-0 left-0 bg-white"></div>
        <div className="w-full h-16 absolute bottom-0 left-0 bg-white"></div>
          <PolkaNft></PolkaNft>
      </div>

      <UIFooter menu={props.menu} />
    </>
  );
}

export default IndexPage;