import React, { useEffect, useState } from 'react'
import { listProductBy } from '../../api/product'
import ProductCard from '../card/ProductCard'
import SwiperShowProduct from '../../utils/SwiperShowProduct'
import { SwiperSlide } from 'swiper/react'
const NewProduct = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    //code
    loadData()
  }, [])

  const loadData = () => {
    listProductBy('updatedAt', 'desc', 12)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <SwiperShowProduct>
      {data?.map((item) => (
        <SwiperSlide key={item.id}> 
          <ProductCard item={item} />
        </SwiperSlide>
      ))}
    </SwiperShowProduct>
  )
}

export default NewProduct
