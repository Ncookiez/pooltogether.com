import { NO_REFETCH } from '@shared/generic-react-hooks'
import { useQuery } from '@tanstack/react-query'
import { getProtocolStats } from 'src/utils'

export const useProtocolStats = () => {
  return useQuery(['protocolStats'], async () => await getProtocolStats(), {
    staleTime: Infinity,
    enabled: true,
    ...NO_REFETCH
  })
}
