import React from 'react'
import {Item} from './Item'

export const Home = ({store}) => {
  return (
    <div>
        <h1>Home</h1>
        <p>Check out our store:</p>
        <Item store={store}/>
    </div>
  )
}
