import { TableRow, TableCell } from '@windmill/react-ui';

import Punk from '../site/Punk.js';

const TableRows = (props) => {

	if(!props.data){
		return (<TableRow key={'NA'}><TableCell><span>No data found</span></TableCell></TableRow>)
	}
	
	return props.data.map((item) => (
		<TableRow key={item._id}>
			<TableCell>
				<span className='font-semibold ml-2'>{item.name}</span>
			</TableCell>
			<TableCell>
				<span className='text-sm'>{item?.amount}</span>
			</TableCell>
			{/* <TableCell>
				<span className='text-sm'>{item?.avail}</span>
			</TableCell>
			<TableCell>
				<span className='text-sm'>{item?.avgsale}</span>
			</TableCell>
			<TableCell>
				<span className='text-sm flex items-center'>
					{((item.cheapest)? ( <Punk key={item?.cheapest?._id} data={item?.cheapest} /> ) : '' )}
					{item.cheapest}
				</span>
			</TableCell> */}
			<TableCell>
				<span className='flex'>
					{((item.examples)? item.examples.map(function(d, i){
						return ( <Punk key={d._id} punk={d} /> )
					}) : '' )}
				</span>
			</TableCell>
		</TableRow>
	));
}

export default TableRows;
