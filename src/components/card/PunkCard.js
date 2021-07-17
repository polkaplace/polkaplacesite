import { InformationCircleIcon, PlusIcon } from "@heroicons/react/outline";
import { Link } from 'react-router-dom';
import { getRarityColor } from '../../constants/punks';
import Punk from '../site/Punk.js';

const PunkCard = (props) => {

	const cardStyle = {
		backgroundColor: getRarityColor(props?.punk?.total_score || 5)
	}

  return (

	  <div className="shadow rounded bg-white">
      <div className="punk-container w-full flex items-center justify-center py-12 relative ">
        <div className="absolute top-0 left-0 w-full h-1/2 rounded-tr rounded-tl overflow-hidden" style={cardStyle}>
          <div className="w-full h-full absolute top-0 left-0 bg-black opacity-25"></div>
          <div className="absolute w-full text-white flex items-center p-4 font-medium">
          <span className="text-white">#{props?.punk?.id}</span>
          <span className="id text-white w-full text-center block">{props?.punk?.ranking}</span>
          <Link to={"/punks/" + props?.punk?.id}>
         	 <InformationCircleIcon className="w-5" />
          </Link>
          </div>
        </div>
      <div className="punk w-24 h-24 md:w-32 md:h-32 flex items-end justify-center rounded overflow-hidden relative" style={cardStyle}>
        <div className="w-full h-full object-contain">
        	<Punk size='large' punk={props?.punk} />
		</div>
      </div>
      </div>
      <div className="content -mt-5 pb-4 md:pb-8 text-center">
	  <Link to={"/punks/" + props?.punk?.id}>
      	<button className="p-1 md:p-4 border rounded-full mx-auto hover:bg-primary hover:text-white hover:border-transparent">
	  		<PlusIcon className="w-5 mx-auto" />
	  	</button>
      </Link>
      </div>
    </div>

  );
};

export default PunkCard;
