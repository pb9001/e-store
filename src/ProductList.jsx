import { useDispatch } from 'react-redux'
import { addToCart } from './features/cartSlice'


const products = [
  { id:1, name: "Keyboard", price: 45, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR0NYWTBitm5gS2-s1ETnm18Zp4nZHysMgE_DJAX6izUvbdTYXgqiV6GfvPXMC2A5AmcR5Qk6XT8eJpeW80k-4_cGLVMHNcv8lTLexsq9PiSn4DmMqFkqQhM0s"},
  { id:2, name: "Mouse", price: 30, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRTCwm7mATgmil846GNnDMbnKhCdN7TSkadc5L9uTFUTN2EJL4dOWoJeoQ0tiQgR1pP7l-XOBFYii42Um1w-ntfpgPbucmUI1BwGbWZnmrfTsHa0_3rF-fA"},
  { id:3, name: "Monitor", price: 300, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREh3LIabNYGJZNOtxNgD8BTVTlyON5JPNkr2eaaBYZfzStuqKGRkshLhnMziTKq5I70uWpczwyXySsiAFoP38CdH5B5n2ldkj5XRe0pokUGN3ykoK0UKCzL7w"}
]

function ProductList() {
  
  const dispatch = useDispatch();
  
  return (
    <div>
        <h2>Products</h2>
        {
          products.map((product)=>{
            return(
              <div key={product.id}>
                <img src={product.image} alt={product.name} />
                <p>{product.name} - ${product.price}</p>
                <button onClick={()=> dispatch(addToCart(product))}>Add to Cart</button> <br /><br />
              </div>)     
          })
        }
    </div>
  )
}

export default ProductList