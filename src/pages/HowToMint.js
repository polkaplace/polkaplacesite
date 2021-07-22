// import { useSelector } from 'react-redux';

import UIFooter from '../components/layout/Footer';
import UIHeader from '../components/layout/Header';
import { CubeIcon } from "@heroicons/react/outline";
import HpBg from '../assets/img/hp-bg.jpg';

import { Link } from 'react-router-dom';
import { Button } from '@windmill/react-ui';

// Hooks
import { useActiveWeb3React } from '../hooks';
import useAuth from '../hooks/useAuth.js';

const steps = [
  'Connect your account',
  'Press "Mint"',
  'Confirm transaction',
  'Go to Polkaparty.io'
];

const stepsDetails = [
  '',
  'Lorem ipsum dolor sit amet consectetuar adipiscing nonummy elit adipiscing...',
  '',
  'Lorem ipsum dolor sit amet consectetuar adipiscing nonummy elit adipiscing...'
]

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
      <div className='w-full px-5 relative'>
      <img src={HpBg} className="w-full top-0 absolute left-0" alt="" />
        <div className='container py-16 md:py-28 md:pb-16 relative'>
          <div className='max-w-[700px] mx-auto text-center'>
            <h1 className="bg-clip-text bg-gradient-to-b from-primary to-primary-light text-transparent">
              How to mint
            </h1>
            <h2>Minting your NFTs on PolkaPlace for PolkaParty</h2>
          </div>
        </div>

        <div className="container-sm flex-row space-y-4 mb-20">
          {steps.map((step, i) => (
          <div className="p-8 rounded shadow items-center relative flex">
            <span className="w-[66px] h-[66px] rounded-full bg-gradient-to-b from-primary to-primary-light md:-translate-x-1/2 md:absolute left-0 items-center text-white justify-center flex font-brand font-bold text-lg">{i+1}</span>
            <div className="ml-5">
            <h3 className="mb-0">{step}</h3>
            {stepsDetails[i] ? <p className="mb-0">{stepsDetails[i]}</p> : ''}
            </div>
          </div>
          ))}
        </div>
      </div>

      <UIFooter menu={props.menu} />
    </>
  );
}

export default IndexPage;
