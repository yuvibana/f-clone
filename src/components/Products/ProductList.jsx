import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchProducts } from '../../features/productsSlice';
import ProductCard from './ProductCard';

export default function ProductList() {
  const dispatch = useDispatch();

  const { items, loading } = useSelector(state => state.products)
 
  useEffect(() => {
    dispatch(FetchProducts())
  }, [])

  if (items.length <= 0) {
    return <h1 className="font35 fw600 heading textcenter my">Product not found</h1>;
  }

  return (
    <div className="conatainer pruductsmain">
      {loading ? (<p>An Error Occured</p>
      ) : (
        <ProductCard
          productsData={items}
          loadingStatus={loading} />
      )}
    </div>
  )
}
