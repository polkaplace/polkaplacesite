// Hooks
import { useActiveWeb3React } from '../hooks/';
import useAuth from '../hooks/useAuth.js';

import UIFooter from '../components/layout/Footer';
import UIHeader from '../components/layout/Header';
import Socials from '../components/layout/Socials';

const questions = [
  {
    question: () => { return ( <> What is a PolygonPunk? </>) },
    answer: () => { return ( <> PolygonPunk is an unique one of a kind Non-Fungible Token (NFT) on Polygon. By minting a PolygonPunk, you become the proud owner of the very first punk NFT on the Polygon network. What’s more is, there can only ever be 10,000 punks. When you decide to mint one, you will receive a unique-one-of-a-kind PolygonPunk with proof of ownership stored on the polygon network. Who knows? Your very first PolygonPunk NFT may be worth your first house or car! </>) },
  },
  {
    question: () => { return ( <> Why is PolygonPunk special? </>) },
    answer: () => { return ( <> The original cryptopunks on the Ethereum mainnet shocked the world when rare punks sold for over 6 million U.S dollars (<a href="https://techcrunch.com/2021/04/08/the-cult-of-cryptopunks/" target="_blank" rel="noreferrer">source</a>). To this day, even non-rare cryptopunks trade within 5 to 6 digits! “Why?” Some people ask, as there is no tangibility to NFTs. As famed Cathie Wood <a href="https://www.businessinsider.com/cathie-wood-shares-outlook-nfts-bitcoin-4-top-ark-holdings-2021-3" target="_blank" rel="noreferrer">stated</a>, there is wonder in these digital arts as “blockchain technologies [provide] — immutability”. There is preservation and worth stored in these cute little art pieces, and with varying rarity, it makes sense the extremely rare ones fetch a high price. <br />
    <br />
    So back to the question, why PolygonPunk? Simple: Speed, Supply, and Scarcity. Not only is Polygon extremely fast and cost efficient, but there is also a rise in demand for NFTs that are both scarce and in demand.<br />
    <br />
	Once the 10,000 punks are minted, there will never be an opportunity to get your hands on one unless you buy one on the market.</>) },
  },
  {
    question: () => { return ( <> How to get a PolygonPunk </>) },
    answer: () => { return ( <> You will have to use $Matic to purchase a PolygonPunk. Once you connect your metamask wallet on the website and confirm the appropriate amount, approve the transaction.<br /><br /><span style={{color: 'red'}}>Caution</span>: Please double and triple check that you have $Matic on the right mainnet (Polygon Main Network). If you use a wrapped version, your funds will be lost. </>) },
  },
  {
    question: () => { return ( <>How to move wrapped $Matic to the mainnet (e.g., BSC> Polygon or ETH> Polygon) </>) },
    answer: () => { return ( <><a href="https://docs.matic.network/docs/develop/wallets/matic-web-wallet/web-wallet-v2-guide/" target="_blank" rel="noreferrer" className="break-all">https://docs.matic.network/docs/develop/wallets/matic-web-wallet/web-wallet-v2-guide/</a> </>) },
  },
  {
    question: () => { return ( <> How to add the Polygon Main Network on metamask </>) },
    answer: () => { return ( <><a href="https://docs.matic.network/docs/develop/metamask/config-matic/" target="_blank" rel="noreferrer" className="break-all">https://docs.matic.network/docs/develop/metamask/config-matic/</a></>) },
  }, 
];

export function Support(props) {
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
      <div className='w-full px-5'>
        <div className='container-sm my-16 md:my-20'>
          <div className="title flex items-center border-b">
          	<h1>Support</h1>
          </div>
          <div className='questions'>
            {questions.map((item, i) => (
              <div key={i} className='my-10'>
                <div className='h2 mb-3'>{item.question()}</div>
                <p>{ item.answer() }</p>
              </div>
            ))}
          </div>
          <div className="title flex items-center border-t">
	        <div className="ml-auto mr-auto mt-3 flex">
				<Socials menu={props.menu} />
	        </div>
          </div>
        </div>
      </div>
      <UIFooter menu={props.menu} />
    </>
  );
}

export default Support;
