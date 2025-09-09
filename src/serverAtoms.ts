import { atom } from 'jotai'
import { getProtocolStats } from './utils'

export const protocolStatsAtom = atom(getProtocolStats)
