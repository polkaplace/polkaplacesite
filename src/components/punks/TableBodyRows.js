import { TableRow, TableCell } from '@windmill/react-ui';
import Punk from '../site/Punk.js';

const TableBodyRows = (props) => {
	return props.data.map((item) => (
		<TableRow key={item._id}>
			<TableCell>
				<span className='text-sm'>{item.ranking}</span>
			</TableCell>
			{/* <TableCell>
				{item.ranking%2 === 0 ?
					<span className="inline-block rounded-full text-xs font-medium px-3 py-1 bg-green-200 text-green-600">For Sale</span> : 
					<span className="inline-block rounded-full text-xs font-medium px-3 py-1 bg-yellow-200 text-yellow-600">Active Bid</span>
				}
			</TableCell> */}
			<TableCell>
				<Punk punk={item} />
			</TableCell>
			<TableCell>
				<span className='text-sm'>{item.id}</span>
			</TableCell>
			<TableCell>
				<span className='text-sm'>{item.minscore}</span>
			</TableCell>
			<TableCell>
				<span className='text-sm'>{item['2nd']}</span>
			</TableCell>
			<TableCell>
				<span className='text-sm'>{item.category_score}</span>
			</TableCell>
			<TableCell>
				<span className='text-sm'>{item.amountAttributes}</span>
			</TableCell>
			<TableCell>
				<span className='text-sm'>{item.att_count_score}</span>
			</TableCell>
			<TableCell>
				<span className='text-sm w-64 truncate block'>{item.attributes.map(function(attribute, i){
					return (<span key={i}>{((i > 0)? ', ' : '')}{attribute.name} {attribute.score}</span>)
				})}</span>
			</TableCell>
			<TableCell>
				<span className='text-sm'>{item.skin}</span>
			</TableCell>
			<TableCell>
				<span className='text-sm'>{item.type}</span>
			</TableCell>
			<TableCell>
				<span className='text-sm'>{item.total_score}</span>
			</TableCell>
		</TableRow>
	));

};
export default TableBodyRows;