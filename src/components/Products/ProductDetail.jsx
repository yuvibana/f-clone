import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { FetchProducts } from '../../features/productsSlice';

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { items, loading } = useSelector((state) => state.products);
  const selectedItem = items.find(data => data.id === parseInt(id))

  useEffect(() => {
    dispatch(FetchProducts())
  })


  if (loading) {
    return <h1 className="font35 fw600 heading textcenter my">Loading...</h1>;
  }
  if (!selectedItem) {
    return <h1 className="font35 fw600 heading textcenter my">Product not found</h1>;
  }

  return (
    <div className='conatainer detaildivmain'>
      <div className="devider dflex contentBetween">
        <div className='slider'>
          <Swiper
            effect={'fade'}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            {selectedItem.images.map((img, i) =>
              <SwiperSlide key={i}>
                <img className='sliderImages' src={img} alt={img} />
              </SwiperSlide>)
            }
          </Swiper>
        </div>
        <div className='cardDetailContent'>
          <span className='dblock font20'>{selectedItem.title}</span>
          <div className='font16 my dflex gap10'> Brand : <span className='dblock font18'> {selectedItem.brand}</span></div>
          <div className='font16 my dflex gap10'> Category : <span className='dblock font18'> {selectedItem.category}</span></div>
          <div className='font16 my dflex gap10'> Discount Percentage : <span className='dblock font18'>${selectedItem.discountPercentage}</span></div>
          <div className='font16 my dflex gap10'> Price :  <span className='dblock font18'>${selectedItem.price}</span></div>
          <div className='font16 my ratingdiv dflex gap10'>Rating : <span className={`dblock btn_sm font18 ${selectedItem.rating > 4 ? 'bggreen' : 'bgred'}`}>{selectedItem.rating}</span></div>
          <div className='font16 my dflex gap10'> In stock : <span className='dblock font18'> {selectedItem.stock}</span></div>
          <span className='dblock my font16'>{selectedItem.description}</span>
          <div className='btnsDiv dflex gap10'>
            <button className='btn rounded-8 btnyellow font16 disabled'>By Now</button>
            <button className='btn rounded-8 btnyellow font16'
            // onClick={() => hndlAddToCart(selectedItem)}
            >Add To Cart</button>
          </div>
        </div>
      </div>


    </div>
  );
}