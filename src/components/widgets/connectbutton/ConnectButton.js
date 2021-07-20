import React from 'react';
import PropTypes from 'prop-types';

import ConnectModal from './ConnectModal.js';
import AccountModal from './AccountModal.js';

import { Button } from '@windmill/react-ui';
import { CreditCardIcon } from '@heroicons/react/outline';

import { Link } from 'react-router-dom';

const ConnectButton = (props) => { 
  const [isModelOpen, openModal] = React.useState(false);
  const accountEllipsis = props.account ? `${props.account.substring(0, 4)}...${props.account.substring(props.account.length - 4)}` : null;

  return (
    <>
      {props.account ? (
        <>
          <div className='border border-primary rounded-full p-1 flex items-center mt-2 md:mt-0'>
            <span className='ml-3 mr-auto overflow-ellipsis overflow-hidden'>{accountEllipsis}</span>
            <button
              className='bg-gray-100 w-7 h-7 rounded-full mx-1 ml-3 border p-1'
              onClick={() => {
                openModal(true);
              }}
            >
              <CreditCardIcon className='text-paragraph' />
            </button>
            <Link to='/my'>
              <Button size='small'>My</Button>
            </Link>
          </div>
          <AccountModal
            account={props.account}
            handleClose={() => {
              openModal(false);
            }}
            logout={props.logout}
            open={isModelOpen}
          />
        </>
      ) : (
        <>
          <Button
        	size={((props.size)? props.size : 'small' )}
        	className={((props.className)? props.className : '' )}
            onClick={() => {
              openModal(true);
            }}
          >
            {((props.children)? props.children : 'Connect')}
          </Button>
          <ConnectModal
            handleClose={() => {
              openModal(false);
            }}
            login={props.login}
            open={isModelOpen}
          />
        </>
      )}
    </>
  );
};

ConnectButton.propTypes = {
    account: PropTypes.string,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
};

export default ConnectButton;
