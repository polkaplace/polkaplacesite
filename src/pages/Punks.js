import { useState } from 'react';
import { TableContainer,  Table,  TableHeader,  TableBody,  TableRow, TableCell, TableFooter, Pagination, Input } from '@windmill/react-ui';

// Hooks
import { useActiveWeb3React } from '../hooks/';
import useAuth from '../hooks/useAuth.js';
import { useGetPunks } from '../state/polygonpunks/hooks';

// UI
import UIFooter from '../components/layout/Footer';
import UIHeader from '../components/layout/Header';
import TableBodyRows from '../components/punks/TableBodyRows';

export function Punks(props) {
  const { login, logout } = useAuth();
  const { account } = useActiveWeb3React();
  	
	const [page, setPage] = useState(1);
	//const [limit, setLimit] = useState(10);
	//const [sort, setSort] = useState('ranking');
	const limit = 10;
	const sort = 'ranking';
	const [q, setQ] = useState('');
  
	let punksData = useGetPunks(page, limit, sort, q);
  
	return (
		<>
		  <UIHeader
		    menu={props.menu}
		    login={login}
		    logout={logout}
		    account={account || ''}
		  />
		  <div className='w-full px-5'>
		    <div className='container mt-16 md:mt-20 mb-0 grid sm:grid-cols-2 md:grid-cols-3 items-center'>
				<h1 className="md:col-span-2">
					All PolygonPunks
				</h1>
				<div className="flex">
					<Input
						placeholder="Search for your PolygonPunk"
						onInput={e => setQ(e.target.value)}
					/>
				</div>
		    </div>
		
		    <div className='container my-10'>
		      <div className='-mx-5 sm:mx-0'>
		        <TableContainer>
		          <Table>
		            <TableHeader>
		              <TableRow>
		                <TableCell><span>Rank</span></TableCell>
										{/* <TableCell><span>Status</span></TableCell> */}
		                <TableCell><span>Image</span></TableCell>
		                <TableCell><span>ID</span></TableCell>
		                <TableCell><span>Min.</span></TableCell>
		                <TableCell><span>Score</span></TableCell>
		                <TableCell><span>2nd</span></TableCell>
		                <TableCell><span>Category Score</span></TableCell>
		                <TableCell><span>Att. Count Score</span></TableCell>
		                <TableCell><span>Attributes</span></TableCell>
		                <TableCell><span>Skin</span></TableCell>
		                <TableCell><span>Type</span></TableCell>
		                <TableCell><span>Total Score</span></TableCell>
		              </TableRow>
		            </TableHeader>
		            <TableBody>
		             	<TableBodyRows data={punksData} />
		            </TableBody>
		          </Table>
		          {((q)? '' : (
		          <TableFooter>
				  	<Pagination totalResults={10000} resultsPerPage={limit} onChange={(p) => { if(page !== p){ setPage(p) } }} label="Table navigation" />
				  </TableFooter>
				   ))}
		        </TableContainer>
		      </div>
		    </div>
		  </div>
		  <UIFooter menu={props.menu} />
		</>
	);
}

export default Punks;
