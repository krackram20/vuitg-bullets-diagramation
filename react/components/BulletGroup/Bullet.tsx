import React from 'react'
// import { Link } from 'vtex.render-runtime'

// import { useCssHandles} from 'vtex.css-handles'
import { LinkProps } from './BulletTypes'

type Props = {
  src: string
  titleBullet: string
  link: LinkProps
}

const Bullet = ({ src, titleBullet, link }: Props) => {
  console.log('Datos para mi bullet', src, titleBullet, link)

  return <div> Mi propio bullet</div>
}

export default Bullet
