import React, {} from 'react';

import UIFooter from '../components/layout/Footer';
import UIHeader from '../components/layout/Header';
import TableRows from '../components/attributes/TableRows';
import SmokerImage from '../assets/img/box-1.png';

import { TableContainer, Table, TableHeader, TableBody, TableRow, TableCell } from '@windmill/react-ui';

// Hooks
import { useActiveWeb3React } from '../hooks/';
import useAuth from '../hooks/useAuth.js';
import { useGetAttributes, useGetTypes, useGetAttributeCount } from '../state/polygonpunks/hooks';


export function Attributes(props) {
	const { login, logout } = useAuth();
	const { account } = useActiveWeb3React();
	
	let typesData = useGetTypes();
	let attributesData = useGetAttributes();
	let attributeCountData = useGetAttributeCount();
  return (
    <>
      <UIHeader
        menu={props.menu}
        login={login}
        logout={logout}
        account={account || ''}
      />
      <div className='w-full px-5'>
      
        <div className='container mt-16 md:mt-20 mb-10'>
          <h5 className='text-primary'>Available to you...</h5>
          <h1>
            Types & Attributes of{' '}
            <img className='inline-block w-6' src={SmokerImage} alt='' />{' '}
            PolygonPunks
          </h1>
        </div>

        <div className='container my-10'>
          <h2>Punk types</h2>
          <div className='-mx-5 sm:mx-0'>
            <TableContainer>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell><span>Attribute</span></TableCell>
                    <TableCell><span>#</span></TableCell>
                    {/* <TableCell><span>Available</span></TableCell>
                    <TableCell><span>Avg Sale</span></TableCell>
                    <TableCell><span>Cheapest</span></TableCell> */}
                    <TableCell><span>More Examples</span></TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRows data={typesData} />
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

        <div className='container my-10'>
          <h2>Attributes</h2>
          <div className='-mx-5 sm:mx-0'>
            <TableContainer>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell><span>Attribute</span></TableCell>
                    <TableCell><span>#</span></TableCell>
                    {/* <TableCell><span>Available</span></TableCell>
                    <TableCell><span>Avg Sale</span></TableCell>
                    <TableCell><span>Cheapest</span></TableCell> */}
                    <TableCell><span>More Examples</span></TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRows data={attributesData} />
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        
        <div className='container my-10'>
          <h2>Attributes Counts</h2>
          <div className='-mx-5 sm:mx-0'>
            <TableContainer>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell><span>Attribute</span></TableCell>
                    <TableCell><span>#</span></TableCell>
                    {/* <TableCell><span>Available</span></TableCell>
                    <TableCell><span>Avg Sale</span></TableCell>
                    <TableCell><span>Cheapest</span></TableCell> */}
                    <TableCell><span>More Examples</span></TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRows data={attributeCountData} />
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        
      </div>
      <UIFooter menu={props.menu} />
    </>
  );
}

export default Attributes;
