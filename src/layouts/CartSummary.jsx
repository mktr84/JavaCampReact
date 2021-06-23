import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, Label } from "semantic-ui-react";

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Dropdown item text={"Sepetiniz [" + cartItems.length + "]"}>
      <Dropdown.Menu>
        {cartItems.map((cartItem) => (
          <Dropdown.Item key={cartItem.product.id}>
            <Label>{cartItem.quantity}</Label>
            {cartItem.product.productName}
          </Dropdown.Item>
        ))}
        <Dropdown.Divider />
        <Dropdown.Item as={NavLink} to="/cart">
          Sepete Git
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
