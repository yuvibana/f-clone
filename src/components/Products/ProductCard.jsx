import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ productsData, loadingStatus }) {
    return (
        <>
            {
                loadingStatus ? (<div className="font25 fw600 heading"> No Product found </div>
                ) : (<div className="font25 fw600 heading">New Arrival </div>)
            }
            <div className="productsDiv textcenter gridDiv">
                {productsData?.map((product, index) =>
                    <div
                        className="productcards border rounded-10"
                        key={index}>
                        <Link to={`/ProductDetail/${product.id}`}>
                            <figure className="productsAvtar">
                                <img src={product.thumbnail} alt={product.image} />
                            </figure>
                            <span className="pname ellipsistext py dblock fw600 font18">{product.brand}</span>
                            <p className="pdesc py fw600 font16">{product.description.substr(0, 25)}</p>
                            <div className="flexdiv my dflex contentBetween itemsCenter">
                                <p className="rating fw600 font16">{product.rating}</p>
                                <p className="pdesc fw600 font18">${product.price}</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}
