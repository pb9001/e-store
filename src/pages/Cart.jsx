import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  addToCart,
  removeFromCart,
  decreaseQuantity,
} from "../features/cartSlice";

import Navbar from "../components/Navbar";
import "./Cart.css";

function Cart() {

  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <section className="cart">

        <h1>Shopping Cart</h1>

        {items.length === 0 ? (

          <div className="empty-cart">
            <h2>Your Cart is Empty</h2>
            <p>Add some products to start shopping.</p>
          </div>

        ) : (

          <>

            <div className="cart-container">

              {items.map((item) => (

                <div className="cart-card" key={item.id}>

                  <h3>{item.name}</h3>

                  <p>Price : ${item.price}</p>

                  <div className="quantity">

                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(addToCart(item))
                      }
                    >
                      +
                    </button>

                  </div>

                  <h4>
                    Total : ${item.price * item.quantity}
                  </h4>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

            <div className="summary">

              <h2>Order Summary</h2>

              <p>Total Items : {totalItems}</p>

              <p>Total Price : ${totalPrice}</p>

              <button
                className="clear-btn"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>

            </div>

          </>

        )}

      </section>

    </>
  );
}

export default Cart;