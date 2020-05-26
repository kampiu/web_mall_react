import React, { Component } from 'react'
import { ProductStyle } from './style'
import { Link } from 'react-router-dom'

function ProductItem ({ dataItem }) {
	return (
	  <Link to={"/product/detail/" + dataItem.id}>
		  <ProductStyle>
			  <div className="icon" title={ dataItem.name }>
				  <img src={ dataItem.thumb } alt=""/>
			  </div>
			  <div className="content">
				  <div className="name">{ dataItem.name }</div>
				  <div className="desc">东莞</div>
				  <div className="main">
					  <div className="price">￥3190.00</div>
					  <span>{ dataItem.sale_num }人购买</span>
				  </div>
			  </div>
		  </ProductStyle>
	  </Link>
	)
}

export default React.memo(ProductItem)
