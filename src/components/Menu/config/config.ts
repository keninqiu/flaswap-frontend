import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
import { ChainId } from '@pancakeswap/sdk'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (t: ContextApi['t'], isDark: boolean, languageCode?: string, chainId?: number) => ConfigMenuItemsType[] =
  (t, isDark, languageCode, chainId) =>
    [
      {
        label: t('Trade'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        href: '/swap',
        showItemsOnMobile: false,
        items: [
          {
            label: t('Swap'),
            href: '/swap',
          },
          /*
          {
            label: t('Limit'),
            href: '/limit-orders',
            supportChainIds: [ChainId.BSC],
            image: '/images/decorations/3d-coin.png',
          },
          */
          {
            label: t('Liquidity'),
            href: '/liquidity',
          },
          /*
          {
            label: t('Perpetual'),
            href: `https://perp.pancakeswap.finance/${perpLangMap(languageCode)}/futures/BTCUSDT?theme=${perpTheme(
              isDark,
            )}`,
            type: DropdownMenuItemType.EXTERNAL_LINK,
          },
          */
        ].map((item) => addMenuItemSupported(item, chainId)),
      },
      /*
      {
        label: t('Earn'),
        href: '/farms',
        icon: EarnIcon,
        fillIcon: EarnFillIcon,
        supportChainIds: [ChainId.BSC],
        image: '/images/decorations/pe2.png',
        items: [
          {
            label: t('Farms'),
            href: '/farms',
          },
          {
            label: t('Pools'),
            href: '/pools',
          },
        ],
      },
      {
        label: t('Win'),
        href: '/prediction',
        icon: TrophyIcon,
        fillIcon: TrophyFillIcon,
        supportChainIds: [ChainId.BSC],
        items: [
          {
            label: t('Trading Competition'),
            href: '/competition',
            image: '/images/decorations/tc.png',
            hideSubNav: true,
          },
          {
            label: t('Prediction (BETA)'),
            href: '/prediction',
            image: '/images/decorations/prediction.png',
          },
          {
            label: t('Lottery'),
            href: '/lottery',
            image: '/images/decorations/lottery.png',
          },
          {
            label: t('Pottery (BETA)'),
            href: '/pottery',
            image: '/images/decorations/lottery.png',
          },
        ],
      },
      {
        label: t('NFT'),
        href: `${nftsBaseUrl}`,
        icon: NftIcon,
        fillIcon: NftFillIcon,
        supportChainIds: [ChainId.BSC],
        image: '/images/decorations/nft.png',
        items: [
          {
            label: t('Overview'),
            href: `${nftsBaseUrl}`,
          },
          {
            label: t('Collections'),
            href: `${nftsBaseUrl}/collections`,
          },
          {
            label: t('Activity'),
            href: `${nftsBaseUrl}/activity`,
          },
        ],
      },
      */
      {
        label: '',
        href: '/info',
        icon: MoreIcon,
        hideSubNav: true,
        items: [
          {
            label: t('Info'),
            href: '/info',
            supportChainIds: [ChainId.BSC],
          },
          /*
          {
            label: t('IFO'),
            href: '/ifo',
            supportChainIds: [ChainId.BSC],
            image: '/images/ifos/ifo-bunny.png',
          },
          {
            label: t('Voting'),
            href: '/voting',
            supportChainIds: [ChainId.BSC],
            image: '/images/voting/voting-bunny.png',
          },
          {
            type: DropdownMenuItemType.DIVIDER,
          },
          {
            label: t('Leaderboard'),
            href: '/teams',
            supportChainIds: [ChainId.BSC],
            image: '/images/decorations/leaderboard.png',
          },
          {
            type: DropdownMenuItemType.DIVIDER,
          },
          {
            label: t('Blog'),
            href: 'https://medium.com/pancakeswap',
            type: DropdownMenuItemType.EXTERNAL_LINK,
          },
          {
            label: t('Docs'),
            href: 'https://docs.pancakeswap.finance',
            type: DropdownMenuItemType.EXTERNAL_LINK,
          },
          */
        ].map((item) => addMenuItemSupported(item, chainId)),
      },
    ].map((item) => addMenuItemSupported(item, chainId))

export default config
