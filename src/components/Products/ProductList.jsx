import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchProducts } from '../../features/productsSlice';
import ProductCard from './ProductCard';

export default function ProductList() {
  const dispatch = useDispatch();

  const { items, error } = useSelector(state => state.products)


  useEffect(() => {
    dispatch(FetchProducts())
  }, [])


  return (
    <div className="conatainer pruductsmain">
      {error ? (<p>An Error Occured</p>
      ) : (
        <ProductCard productsData={items} />
      )}
    </div>
  )
}
