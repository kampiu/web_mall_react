import React, { Component } from 'react'
import { BrandGridStyle } from './style'

function Item (props) {
	const { imageUrl, title } = props
	return (
	  <div className="item-nav">
		  <div className="item" style={{backgroundImage: `url(${imageUrl})`}}>
			  {/*<img src={ imageUrl } alt=""/>*/}
		  </div>
		  <span>{ title }</span>
	  </div>
	)
}

const BrandGrid = (WrappedComponent) => (props) => {
	const { dataItem } = props
	
	return (
	  <BrandGridStyle>
		  <div className="header">
			  <div className="main">
				  <div className="header-icon" style={ { backgroundImage: `url(${ dataItem.icon })` } }/>
				  { dataItem.name }
				  <div className="more">更多商家</div>
			  </div>
			  <div className="desc">{ dataItem.desc }</div>
		  </div>
		  <div className="body">
			  {
				  dataItem.list.map(item => (<WrappedComponent key={ item.id } title={ item.name } imageUrl={ item.logo }/>))
			  }
		  </div>
	  </BrandGridStyle>
	)
}

// export default React.memo(BrandGrid)
export default BrandGrid(Item)
