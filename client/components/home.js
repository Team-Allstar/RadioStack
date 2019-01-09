import React from 'react'
// import Categories from './categories'
import {FeaturedProducts, Categories} from './'
// import {Categories, FeaturedProducts} from './components'

const Home = () => (
  <div id="home">
    <div>
      <Categories />
    </div>
    <div>
      <FeaturedProducts />
    </div>
  </div>
)

/**
 * CONTAINER
 */

export default Home
