import { atom, useAtom } from 'jotai'
import { AggregatedProtocolStats } from './types'
import { getProtocolStats } from './utils'

export const protocolStatsAtom = atom<AggregatedProtocolStats | undefined>(undefined)

export const useProtocolStats = () => {
  const [protocolStats, setProtocolStats] = useAtom(protocolStatsAtom)

  if (!!protocolStats) return protocolStats

  getProtocolStats().then(setProtocolStats)
}
