import React from 'react'
import {Item} from './Item'

export const Home = ({store, currentPage, shouldDiscount}) => {
  return (
    <div>
        <Item store={store} currentPage={currentPage} shouldDiscount={shouldDiscount}/>
    </div>
  )
}
