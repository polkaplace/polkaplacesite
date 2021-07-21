import { Button } from '@windmill/react-ui';

const PolkaNft = () => {
  return ( 
    <div className="card relative z-10 mx-auto bg-white shadow-2xl ring-8 ring-opacity-10 ring-primary rounded p-4 md:p-8 max-w-[550px] w-full">
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
              <small className="text-xs w-3/4 mx-auto text-center block mt-5">*Minting a PolkaParty NFT will give you access to 20% revenue sharing</small>
            </div>
   );
}
 
export default PolkaNft;