import classNames from 'classnames'
import { ReactNode } from 'react'
import { InterfaceCard, InterfaceCardType } from './InterfaceCard'

interface InterfaceCardsProps {
  cards: InterfaceCardType[]
  title?: string
  append?: ReactNode
  className?: string
}

export const InterfaceCards = (props: InterfaceCardsProps) => {
  const { cards, title, append, className } = props

  return (
    <div className={classNames('w-full max-w-2xl flex flex-col gap-4 items-center', className)}>
      {!!title && <span className='text-sm text-pt-purple-200 md:text-base'>{title}</span>}
      <div className='w-full flex flex-col gap-4'>
        {cards.map((cardType) => {
          return <InterfaceCard key={`${cardType}-card`} type={cardType} />
        })}
      </div>
      {append}
    </div>
  )
}
