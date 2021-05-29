import React from 'react'

import { ButtonLink } from 'lib/components/ButtonLink'

export const IndexPoolToken = (props) => {
  return (
    <>
      <div id='token' className='bg-darkened text-center pt-12 pb-6 sm:pt-20 sm:pb-16'>
        <div className='pool-container mx-auto'>
          <h1 className='text-center'>
            <span
              role='img'
              aria-label='sparkles emoji'
              className='relative mx-2 text-2xl lg:text-3xl -t-1 lg:-t-2'
            >
              ✨
            </span>{' '}
            <span className='text-flashy'>POOL</span> Token{' '}
            <span
              role='img'
              aria-label='sparkles emoji'
              className='relative mx-2 text-2xl lg:text-3xl -t-1 lg:-t-2'
            >
              ✨
            </span>
          </h1>

          <p className='text-sm xs:text-xl sm:text-xl lg:text-3xl text-center mt-10 mx-auto lg:max-w-4xl'>
            The PoolTogether Protocol is controlled by POOL token holders.
            <br className='hidden lg:block' />
            &nbsp;All changes to the protocol are submitted and approved.
            <br className='hidden lg:block' />
            &nbsp;The protocol automatically distributes the POOL token to anyone who deposits into
            the protocol.
          </p>

          <div className='mt-10'>
            <div className='sm:w-7/12 lg:w-1/2 sm:mx-auto my-6'>
              <ButtonLink
                textSize='xl'
                width='w-full'
                as={`https://app.pooltogether.com`}
                href={`https://app.pooltogether.com`}
              >
                Deposit to receive POOL tokens
              </ButtonLink>
            </div>
            <div className='sm:w-7/12 lg:w-1/2 sm:mx-auto my-6'>
              <ButtonLink
                tertiary
                textSize='xl'
                width='w-full'
                as={`https://medium.com/p/fca9ab8b8ba2`}
                href={`https://medium.com/p/fca9ab8b8ba2`}
              >
                Learn about governance
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
