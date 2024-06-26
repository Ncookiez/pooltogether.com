import { LINKS } from '@shared/ui'
import { useTranslations } from 'next-intl'
import { FancyCard, FancyCardProps } from '@components/FancyCard'

export type BuilderCardType =
  | 'clientJs_v4'
  | 'clientJs'
  | 'reactHooks'
  | 'prizeTierController'
  | 'brandKit'
  | 'pooltogetherUiKit'
  | 'pooltogetherTokenBrandingGuidelines'
  | 'cabanaFactory'
  | 'nextjsTemplate'
  | 'sveltekitTemplate'

interface BuilderCardProps {
  type: BuilderCardType
  className?: string
}

export const BuilderCard = (props: BuilderCardProps) => {
  const { type, className } = props

  const t = useTranslations('Builders')

  const builderCardInfo: Record<BuilderCardType, Omit<FancyCardProps, 'className'>> = {
    clientJs_v4: {
      href: LINKS.clientJs_v4,
      iconSrc: '/icons/devToolIcon.svg',
      title: t('clientJs_v4CardTitle'),
      author: 'PoolTogether Inc.',
      tags: ['dev', 'v4'],
      description: t('clientJs_v4CardDescription')
    },
    clientJs: {
      href: LINKS.clientJs,
      iconSrc: '/icons/devToolIcon.svg',
      title: t('clientJsCardTitle'),
      author: 'G9 Software Inc.',
      tags: ['dev', 'v5'],
      description: t('clientJsCardDescription')
    },
    reactHooks: {
      href: LINKS.reactHooks,
      iconSrc: '/icons/devToolIcon.svg',
      title: t('reactHooksCardTitle'),
      author: 'G9 Software Inc.',
      tags: ['dev', 'v5'],
      description: t('reactHooksCardDescription')
    },
    prizeTierController: {
      href: LINKS.prizeTierController,
      iconSrc: '/icons/devToolIcon.svg',
      title: t('prizeTierControllerCardTitle'),
      author: 'PoolTogether Inc.',
      tags: ['dev', 'v4'],
      description: t('prizeTierControllerCardDescription')
    },
    brandKit: {
      href: LINKS.brandKit,
      iconSrc: '/icons/devToolIcon.svg',
      title: t('brandKitCardTitle'),
      author: 'PoolTogether Inc.',
      tags: ['design'],
      description: t('brandKitCardDescription')
    },
    pooltogetherUiKit: {
      href: LINKS.pooltogetherUiKit,
      iconSrc: '/icons/devToolIcon.svg',
      title: t('pooltogetherUiKitCardTitle'),
      author: 'G9 Software Inc.',
      tags: ['design'],
      description: t('pooltogetherUiKitCardDescription')
    },
    pooltogetherTokenBrandingGuidelines: {
      href: LINKS.pooltogetherTokenBrandingGuidelines,
      iconSrc: '/icons/devToolIcon.svg',
      title: t('pooltogetherTokenBrandingGuidelinesCardTitle'),
      author: 'G9 Software Inc.',
      tags: ['design'],
      description: t('pooltogetherTokenBrandingGuidelinesCardDescription')
    },
    cabanaFactory: {
      href: 'https://factory.cabana.fi/',
      iconSrc: '/icons/cabanaIcon.svg',
      title: t('cabanaFactoryCardTitle'),
      author: 'G9 Software Inc.',
      tags: ['dev', 'v5'],
      description: t('cabanaFactoryCardDescription')
    },
    nextjsTemplate: {
      href: 'https://github.com/GenerationSoftware/pooltogether-nextjs-template',
      iconSrc: '/icons/nextjsIcon.svg',
      title: t('nextjsTemplateCardTitle'),
      author: 'G9 Software Inc.',
      tags: ['dev', 'v5'],
      description: t('nextjsTemplateCardDescription')
    },
    sveltekitTemplate: {
      href: 'https://github.com/GenerationSoftware/pooltogether-sveltekit-template',
      iconSrc: '/icons/svelteIcon.svg',
      title: t('sveltekitTemplateCardTitle'),
      author: 'G9 Software Inc.',
      tags: ['dev', 'v5'],
      description: t('sveltekitTemplateCardDescription')
    }
  }

  const card = builderCardInfo[type]

  return <FancyCard {...card} className={className} />
}
