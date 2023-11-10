import React, { useContext } from 'react'
import { ShopcontextMain } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { Breakculm } from '../components/Breakculm/Breakculm';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const {all_product} = useContext(ShopcontextMain);
  const {productId} = useParams();
  const product = all_product.find((e: any) => e.id === Number(productId))
  return (
    <div>
      <Breakculm product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}
