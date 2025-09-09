import deepmerge from 'deepmerge'
import { PROTOCOL_STATS_API_URL } from './constants'
import { AggregatedProtocolStats } from './types'

export const getProtocolStats = async () => {
  try {
    const results = await fetch(PROTOCOL_STATS_API_URL)

    // Check if the response is ok
    if (!results.ok) {
      console.error(`Failed to fetch protocol stats: ${results.status} ${results.statusText}`)
      return undefined
    }

    // Check if response is JSON
    const contentType = results.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      console.error('Protocol stats API returned non-JSON response')
      return undefined
    }

    const data: AggregatedProtocolStats = await results.json()
    return data
  } catch (error) {
    console.error('Error fetching protocol stats:', error)
    return undefined
  }
}

export const getMessages = async (locale?: string, options?: { useDefault?: boolean }) => {
  const defaultMessages: IntlMessages = (await import(`../messages/en.json`)).default

  if (!locale) return defaultMessages

  const localeMessages: IntlMessages = (await import(`../messages/${locale}.json`)).default
  const messages = options?.useDefault
    ? deepmerge<IntlMessages>(defaultMessages, localeMessages)
    : localeMessages

  return messages
}
