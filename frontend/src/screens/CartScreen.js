import React, { useEffect } from 'react'
import Header from './../components/Header'
import {Link, useSearchParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/Actions/CartActions'

const CartScreen = () => {
    window.scrollTo(0, 0)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    const productId = searchParams.get("id");
    const navigate = useNavigate()
    const qty = Number(searchParams.get("qty"));

const cart = useSelector((state) => state.cart)
const { cartItems } = cart

const totalPrice = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);
useEffect(() => {
    if(productId) {
        dispatch(addToCart(productId, qty))
    }

}, [dispatch, productId, qty])  

const checkOutHandler = (e) => {
    navigate('/shipping')
}

const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
}

  return (
    <>
        <Header />
        {/* Cart */}
        <div className='container'>
            {cartItems.length === 0 ? (
                <div className=' alert alert-info text-center mt-3'>
                    Your cart is empty
                <Link 
                    className='btn btn-success mx-5 px-5 py-3' 
                    to={'/'} 
                    style={{fontSize: '12px'}}>
                    SHOPPING NOW  ??
                </Link>
                </div>
                ) : (
                    <>
                        <div className='alert alert-info text-center mt-3'>
                            Total cart products
                            <Link className='text-success mx-2' to={'/'}>
                                ({cartItems.length})
                            </Link>
                        </div>
                        {/* cartiterm */}
            {cartItems.map((item) => (
              <div className="cart-iterm row" key={item.product}>
                <div
                  onClick={() => removeFromCartHandler(item.product)}
                  className="remove-button d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-times"></i>
                </div>
                <div className="cart-image col-md-3">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center">
                  <Link to={`/products/${item.product}`}>
                    <h4>{item.name}</h4>
                  </Link>
                </div>
                <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                  <h6>QUANTITY</h6>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                  <h6>SUBTOTAL</h6>
                  <h4>${item.price * item.qty}</h4>
                </div>
              </div>
            ))}

            {/* End of cart items */}
            <div className='total'>
                <span className='sub'>total:</span>
                <span className='total-price'>${totalPrice}</span>
            </div>
            <hr />
            <div className='cart-buttons d-flex align-items-center row'>
                <Link to={'/'} className='col-md-6'>
                    <button>
                        Continue Shopping
                    </button>
                </Link>
                {
                    totalPrice > 0 && (
                        <div className='col-md-6 d-flex justify-content-md-end mt-3 mt-md-0'>
                    <button onClick={checkOutHandler}>
                            Checkout
                    </button>
                </div>
                    )
                }
                
            </div>
                    </>
                )
            }
        </div>
    </>
  )
}

export default CartScreen