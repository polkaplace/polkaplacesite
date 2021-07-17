import { ChainId, Pair, Token } from '@pancakeswap-libs/sdk'
import flatMap from 'lodash.flatmap'
import { useCallback, useMemo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { useActiveWeb3React } from '../../hooks'
// eslint-disable-next-line import/no-cycle

import { AppDispatch, AppState } from '../index'
