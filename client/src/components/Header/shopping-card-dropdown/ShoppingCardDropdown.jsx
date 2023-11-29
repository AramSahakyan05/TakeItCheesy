// import { useDispatch, useSelector } from 'react-redux'

// import { countTotalOfEachPizza } from '../../../redux/slices/pizzaReviewSlice';

// import { useState } from 'react'

// import { useNavigate } from 'react-router-dom';

// import {IoMdCloseCircle} from 'react-icons/io'

// import './ShoppingCardDropdown.scss';

// const ShoppingCardDropdown = () => {
//     const [value, setValue] = useState(1);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const data = useSelector(state => state.pizzaReview.pizza_in_basket)

//   return (
//     <div className='shopping__cart__dropdown'>
//       <ul className='shopping__cart__dropdown__list'>
//         {
//             data.map(({id, img, name, price, qty}) => {
//                 return (
//                   <li key={id} className='shopping__cart__dropdown__list__item'>
//                     <div>
//                       <img src={img} className='shopping_cart_pizza' />
//                       <div>
//                         <p>{name}</p>
//                         <span>{price}</span>
//                         <div>
//                           <label>Qty:</label>
//                           <input 
//                           type="number" 
//                           value={qty} 
//                           onChange={(e) => {
//                           if(value > 0) {
//                             dispatch(
//                               countTotalOfEachPizza({
//                                 id,
//                                 qty: e.target.value,
//                               })
//                           );
//                           }
//                         }}/>
//                         </div>
//                       </div>
//                         <a><IoMdCloseCircle /></a>
//                     </div>
//                   </li>
//                 )
//             })
//         }
//         <div className='shopping__cart__dropdown__list__cart__checkout'>
//           <div>
//             <p>Cart Subtotal</p>
//             <a onClick={() => navigate('/cart')} className="btn_color">CART</a>
//           </div>
//           <div>
//             <p>
//               ${getTotal(data)}.00
//             </p>
//             <a onClick={() => navigate('/checkout')} className="btn_color">CHECKOUT</a>
//           </div>
//         </div>
//       </ul>
//     </div>
//   )
// }


// function getTotal(array) {
//   if (array.lenght !== 0) {
//     const total = array.reduce((aggr, current) => {
//       if (!current.total) {
//         return +current?.price?.slice(1) + aggr;
//       }
//       return +current?.total?.slice(1) + aggr;
//     }, 0);
//     return Math.floor(total);
//   }
//   return 0;
// }

// export default ShoppingCardDropdown
