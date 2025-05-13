import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

function ProductCard({ product }) {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className='product-card'>
      <img src={product.imgURL} alt="Product" />
      <div>
        <h3>
          {product.name} <br />
          <span>{product.price}</span>
        </h3>
        <button className='primary-button' onClick={() => addToCart(product.id, 1)}>
          Agregar
        </button>
      </div>
    </div>
  )
}

export default ProductCard