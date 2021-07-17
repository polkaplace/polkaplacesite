/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import useWindowResize from '../../hooks/useWindowResize';

import '../../styles/components/mobileMenu.css'

import Logo from '../../assets/img/logo.svg';
import Socials from './Socials.js';

import OpenIcon from './assets/open';
import CloseIcon from './assets/close';

import ConnectButton from './../widgets/connectbutton/ConnectButton';

const Header = (props) => {
  const { screenIndex, screen } = useWindowResize();

  const [isOpenMobileMenu, openMobileMenu] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => openMobileMenu(false));

  const makeMenu = (menu, isUl) => {
    if (!menu) return;
    return menu.map((m, i) => {
      let item = '';
      let subName = '';


      if (m.subname) {
        subName = <span className='subLabel'>{m.subname}</span>;
      }

      if (m.only && m.only.indexOf(screen) !== true) {
        return '';
      }

      if (m.href) {
        item = (
          <a href={m.href} className='mr-6'>
            {m.name}
            {subName}
          </a>
        );
      } else if (m.link) {
        item = (
          <Link to={m.link} className={((isUl)? '' : 'mr-6')}>
            {m.name}
            {subName}
          </Link>
        );
      } else if (m.isButton) {
        item = (
          <button primary onClick={m.onClick}>
            {m.name}
            {subName}
          </button>
        );
      } else {
        item = (
          <span className='link' onClick={m.onClick ? m.onClick : ''}>
            {m.name} {subName}
          </span>
        );
      }
	  if(isUl){
		  return <li key={i}>{item}</li>;
	  }
      // Menu.Item
      return <span key={i}>{item}</span>;
    });
  };

  const connectButton = (
    <ConnectButton account={props.account} login={props.login} logout={props.logout} />
  );
  const logo = (
    <Link to='/'>
      <img src={Logo} alt="" className="w-40 flex-shrink-0" />
    </Link>
  );

  const mobileMenuButton = () => {
    return (
        <div
          className='OpenCloseIcon absolute right-4'
          onClick={() => {
            openMobileMenu(!isOpenMobileMenu);
          }}
        >
          {isOpenMobileMenu ? (
            <OpenIcon width={30} height={30} />
          ) : (
            <CloseIcon width={30} height={30} />
          )}
        </div>
    );
  };
  
  	const mobileMenu = () => {
      return (
	    <>
        <div className='mobileMenu absolute bottom-0 top-0 right-0 w-full'> 
          <div className='inner'>
	          <div className='mx-auto w-32 mt-20 mb-20 text-center'>{logo}</div>
	          <ul className='text-white'>
		          {makeMenu(props.menu.right || [], true)}
				  {makeMenu(props.menu.left, true)}
				  
				  {((props.menu.left !== props.menu.mainMenu)? makeMenu(props.menu.mainMenu, true) : '')}
			  </ul>
			</div>
	     </div>
	     <div className='menuMask' 
			onClick={() => {
	        	openMobileMenu(!isOpenMobileMenu);
			}}></div>
		</>
      )
    }

  return (
    <div className={((isOpenMobileMenu)? 'isOpen' : 'isClosed') + ' w-full px-5 border-b'}>
	{((screenIndex > 1)? (
		<div className='container py-4 pt-6 md:py-5 flex items-center'>
			{logo}
			<div className='flex items-center text-header w-full'>
      <div className="ml-5">{makeMenu(props.menu.mainMenu)}</div>
				<div className='flex items-center hidden md:block ml-auto'>
					<a href="https://polkaparty.io" target="_blank" norefferer>polkaparty.io</a>
				</div>

			<div className='px-3'>
				<div className='flex items-center'>
					<Socials menu={props.menu} />
				</div>
			</div>
      
				<div className='hidden md:block'>{connectButton}</div>
			</div>
		</div>
	) : (
		<>
			<div className='container py-2 pt-2'>{connectButton}</div>
			<div className={'container py-5 pt-6 md:py-7 border-b flex items-center'}>
				
				{logo}
				<div className='ml-4 md:border-l md:ml-5 md:pl-5 pr-10'>
					<div className='flex items-center '>
						<Socials menu={props.menu} />
					</div>
				</div>
				{mobileMenuButton()}
			</div>
			{mobileMenu()}
		</>
	) ) }
      
      
     
    </div>
  );
};

export default Header;
