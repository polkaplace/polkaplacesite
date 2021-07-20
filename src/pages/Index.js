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
          
          {/* <Remaining />
          <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-bold focus:outline-none hover:shadow font-sans px-7 py-2 rounded-full text-sm text-white bg-primary bg-gradient-to-b from-primary to-primary-light border border-transparent active:bg-primary-hover hover:bg-primary-hover w-full" type="button">Mint</button> */}
        </div>
      </div>

      <div className="w-full px-5 py-10 md:py-20 bg-secondary flex justify-center">
          <div className="card bg-white shadow rounded p-4 md:p-8 max-w-[550px] w-full">
            <div className="md:flex items-center">
              <div className="mx-auto md:mx-0 mb-5 md:mb-0 nft w-[120px] h-[120px] flex-shrink-0 md:w-[144px] md:h-[144px] bg-yellow-200"></div>
              <h2 className="md:ml-8 text-center md:text-left">PolkaParty NFT</h2>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 my-4 items-center text-center md:text-left">
                <div>
                  <small className="mb-0 text-xs font-bold">Price</small>
                  <p className="-mt-2 mb-0">$500 USDC</p>
                </div>
                <div>
                  <small className="mb-0 text-xs font-bold">Access</small>
                  <p className="-mt-2 mb-0">Revenue</p>
                </div>
                <div>
                  <small className="mb-0 text-xs font-bold">Amount</small>
                  <p className="-mt-2 mb-0">1,000</p>
                </div>
                <div className="col-span-3 md:col-span-1 mt-4 md:mt-0">
                  <div className="p-3 bg-green-500 rounded text-white text-center">
                  <small className="text-xs text-white mb-0 block">NFTs Left</small>
                  <b className="text-white -mt-1 block font-brand font-bold">100/1000</b>
                  </div>
                </div>
              </div>

              <Button className="w-full" size="larger">Mint</Button>
            </div>
      </div>

      <UIFooter menu={props.menu} />
    </>
  );
}

export default IndexPage;