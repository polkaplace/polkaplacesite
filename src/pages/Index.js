// import { useSelector } from 'react-redux';

import UIFooter from '../components/layout/Footer';
import UIHeader from '../components/layout/Header';
import { CubeIcon } from "@heroicons/react/outline";

import { Link } from 'react-router-dom';
import { Button } from '@windmill/react-ui';

// Hooks
import { useActiveWeb3React } from '../hooks/';
import useAuth from '../hooks/useAuth.js';

import RemainingPunks from '../components/site/RemainingPunks.js';

import AllPunksPng from '../assets/img/punks.png';
import PipePunkImage from '../assets/img/pipe.png';
import logoWhite from '../assets/img/logoWhite.svg';
import polygonLogo from '../assets/img/polygon.svg';

import Box1Image from '../assets/img/box-1.png';
import Box2Image from '../assets/img/box-2.png';
import Box3Image from '../assets/img/box-3.png';

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
        </div>
      </div>

      <UIFooter menu={props.menu} />
    </>
  );
}

export default IndexPage;
