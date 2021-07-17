import { useGetPunks } from '../../state/polygonpunks/hooks';

import PunkGrid from '../site/PunkGrid';
import PunkCard from '../card/PunkCard';

const RecentlyMinted = (props) => {
	
  let punksRecentMintedData = useGetPunks(1, 4, 'mint_date', '');

  return (
    <>
      <PunkGrid>
      	{((punksRecentMintedData.length <= 0)? 'No punk minted' : '')}
		{punksRecentMintedData.map(function(data, i){
			return (<PunkCard key={data._id} punk={data} />)
		})}
      </PunkGrid>
    </>
  );
};
export default RecentlyMinted;
