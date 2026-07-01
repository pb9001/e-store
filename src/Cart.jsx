import {useSelector, useDispatch} from 'react-redux'
import { clearCart } from './features/cartSlice'

function Cart() {

    const items = useSelector((state)=> state.cart.items);

    const dispatch = useDispatch();

    const totalPrice = items.reduce((sum,item)=> sum + item.price * item.quantity, 0);

    if(items.length == 0) return <p>Cart is Empty</p>;

  return (
    <div>
        <h2>Cart</h2>
        {
            items.map((item)=>{
              return(<div key={item.id}>
                     <p>{item.name} - {item.price} * {item.quantity} = {item.price * item.quantity}</p>
                     <button onClick={()=> dispatch({type: 'cart/removeFromCart', payload: item.id})}>Remove</button>
                     < button onClick={()=> dispatch({type: 'cart/addToCart', payload: item})}>+</button>
                     <button onClick={()=> dispatch({type: 'cart/decreaseQuantity', payload: item.id})}>-</button>
                </div>)
            })
        }

        <h3>Total Price : ${totalPrice}</h3>
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  )
}

export default Cart