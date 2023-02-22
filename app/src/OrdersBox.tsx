import Box from "./Box";
import styled from "styled-components";
import useApiFetch from "./apiHook";
import { Order } from "./datatypes";
import OrderListItem from "./OrderListItem";

const Title = styled.h3`
  color: ${({ theme }) => theme.textColor};
  margin-top: 0;
`;

const OrderListItems = styled.div``;

const OrdersBox = () => {
  const orderData = useApiFetch<Order[]>("/order?limit=5&sort=desc");

  if (!orderData) {
    return null;
  }

  return (
    <Box>
      <Title>Latest orders</Title>
      <OrderListItems>
        {orderData.map((order) => (
          <OrderListItem order={order} />
        ))}
      </OrderListItems>
    </Box>
  );
};

export default OrdersBox;
