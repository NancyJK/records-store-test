import React, { useContext } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import "../../styles/CartItem.scss";

import { addCartItem, deleteCartItem, getCartData } from "../../api/cartsApi";
import { DataContext } from "../../contexts/Context";

const CartItem = ({ item }) => {
  const { record } = item;
  console.log(item);

  const { cartsState, cartsDispatch, usersState } = useContext(DataContext);

  const deleteFromCartHandler = async (recordId) => {
    const cartId = usersState.user?.cartId;

    if (cartsState && cartsState.items) {
      await deleteCartItem(cartsDispatch, recordId, cartId);
      getCartData(cartsDispatch, cartId);
    }
  };

  const handleAddCartItem = async () => {
    await addCartItem(
      cartsDispatch,
      cartsState,
      record,
      usersState.user.cartId
    );

    getCartData(cartsDispatch, usersState.user.cartId);
  };

  return (
    <li className="item">
      <h3 className="item__title">
        {record.title} by {record.artist}
      </h3>
      <img src={record.img} alt="thumbnail" className="item__thumbnail" />
      <div className="item__actions">
        <input
          type="number"
          value={item.quantity}
          onChange={() => handleAddCartItem(record)}
          className="item__quantity"
        />
        <AiTwotoneDelete
          className="item__remove"
          onClick={() => deleteFromCartHandler(record._id)}
        />
      </div>
    </li>
  );
};

export default CartItem;
