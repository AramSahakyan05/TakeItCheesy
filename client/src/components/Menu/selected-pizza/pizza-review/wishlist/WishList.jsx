import React from 'react'
import { CONFIG } from '../../../../../config'

const WishList = () => {
  return (
    <div className='wishlist'>
      <ul className='compare'>
        {
          CONFIG.singlePizzaOrderList.compare.map(({id, icon, name}) => {
            return <li key={id}>{icon}{name}</li>
          })
        }
      </ul>
      <ul className='share'>
        {
          CONFIG.singlePizzaOrderList.share.map(({id, icon, name}) => {
            return <li key={id} className='icons'>{icon}{name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default WishList
