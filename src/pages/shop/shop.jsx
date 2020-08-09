import React from 'react'
import DATA from './shopData'
import CollectionPreview from '../../components/collection-preview/collection-preview'

class Shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: DATA,
    }
  }

  render = () => (
    <div className='shop'>
      <h1>Collections</h1>
      {this.state.collections.map(({ id, ...restProps }) => (
        <CollectionPreview key={id} {...restProps} />
      ))}
    </div>
  )
}

export default Shop
