import React, { PropsWithChildren } from 'react'
import { useDevice } from 'vtex.device-detector'
import { useListContext } from 'vtex.list-context'

import { getBulletsasTSXList } from './modules/bulletsAsList'
import { BulletsSchema } from './BulletTypes'

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children,
}: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice()
  const { list } = useListContext() || []

  console.log('bullets', bullets)

  const bulletsContent = getBulletsasTSXList(bullets)

  if (false) {
    console.log(children, list)
  }

  return isMobile ? <div>Estamos en mobile</div> : <div>{bulletsContent}</div>
}

export default BulletGroup
