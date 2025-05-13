import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductCard from './ProductCard'

function ConteinerProducts() {
  const { products } = useContext(ShopContext);
  return (
    <section className='conteiner-products'>
      {
        products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))
      }
    </section>
  )
}

export default ConteinerProducts