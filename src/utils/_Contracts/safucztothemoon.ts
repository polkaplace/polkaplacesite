/*
import { CurrencyAmount, Fraction } from '@pancakeswap-libs/sdk'
import { getAddress } from '@ethersproject/address'
import { Contract } from '@ethersproject/contracts'
import { AddressZero } from '@ethersproject/constants'
import { Web3Provider, JsonRpcSigner } from '@ethersproject/providers'
*/


// REACT_APP_SAFUTOTHEMOON_TOKEN_ADDRESS
// let backend_url = process.env.REACT_APP_BACKEND_URL;

export const getRole = async (contract, account) => {
  
  return "admin";
}
export enum Roles {
  Admin = "admin",
  Owner = "owner",
  Operator = "operator",
  User = "user",
}

export const buyTicket = async (contract, account) => {
  
}
export const mayPlay = async (contract, account) => {
  
  return true;
}

export const getHighscore = async (contract, account, season, address) => {
  
  return 650;
}

export const getCurrentGame = async (contract, account) => {
  return 987;
}
export const getCurrentSeason = async (contract, account) => {
  return 2;
}

// 
export const getUserGames = async (address, curser, size) => {
  return [1,2,3,4];
}
export const getAmountToPlay = async (address, curser) => {
  
  return 200;
}

// User Claims
export const getUserClaims = async (contract, account) => {
  return [
    {
      amount: 2000,
      game: 2,
      season: 1,
      user: "0x0000",
      score: 2323,
      claimed: false 
    },
    {
      amount: 2000,
      game: 3,
      season: 1,
      user: "0x0000",
      score: 2323,
      claimed: false 
    },
  ];
}
export const userClaimPrice = async (contract, account, index) => {
  
}

// Admin stuff
export const newSeason = async (address, curser, time) => {
  return true;
}
export const claimTreasury = async (address, curser, amount) => {
  return true;
}

export const setAmountToPlay = async (address, curser, amount) => {
  return true;
}

export const setPause = async (address, curser) => {
  
  return true;
}
export const setUnPause = async (address, curser) => {
  
  return true;
}

// Add token to wallet
/*
export const addTokenToWallet = () => {
  
  const addTokenToWallet = async () => {
    const request = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: process.env.REACT_APP_SAFU_TOKEN_ADDRESS,
          symbol: 'SAFU',
          decimals: 18,
          image: 'https://ceezee.io/img/favicon.png',
        },
      },
    });
    return request;
  };
  
  addTokenToWallet().then((success) => {
    console.log(success);
  }).catch((err) => {
    console.error(err);
  });
}
*/
