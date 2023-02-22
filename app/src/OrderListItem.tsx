import styled, { DefaultTheme } from "styled-components";
import { Order } from "./datatypes";
import Subheader from "./SubHeader";

const Container = styled.div`
  padding: 0.75em;
  border: 1px solid ${({ theme }) => theme.backgroundColor};
  border-top: 0;

  :first-child {
    border: 1px solid ${({ theme }) => theme.backgroundColor};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  :last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const Title = styled.h4`
  font-size: 1.2em;
  margin: 0;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.textColor};
`;

const ProductName = styled(Subheader)`
  font-size: 0.8em;
  margin-bottom: 0.3em;
`;

const ProductDetail = styled.p`
  margin: 0;
  margin-bottom: 0.3em;
  font-size: 0.8em;
  color: ${({ theme }) => theme.textColor};
`;

const OrderStatusTag = styled.div`
  display: flex;
  margin-bottom: 0.3em;
`;

const OrderStatusTagCircle = styled.div<{ status: string }>`
  margin: 0.2em 0.4em 0.2em 0;
  flex-grow: 0;
  display: flex;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  background-color: ${({ theme, status }) => orderStatusToColor(theme, status)};
`;

const OrderStatusTagText = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.textColor};
  letter-spacing: 0.15em;
  font-size: 0.8em;
  text-transform: uppercase;
`;

interface Props {
  order: Order;
  className?: string;
}

const orderStatusToColor = (theme: DefaultTheme, status: string) => {
  switch (status) {
    case "shipped":
      return theme.primaryColors.blue;
    case "in_progress":
      return theme.primaryColors.orange;
    default:
      return theme.primaryColors.purple;
  }
};

const OrderListItem = ({ order, className }: Props) => (
  <Container className={className}>
    <ProductName>{order.product_name}</ProductName>
    <Title>{order.full_name}</Title>
    <OrderStatusTag>
      <OrderStatusTagCircle status={order.order_status} />
      <OrderStatusTagText>
        {order.order_status.replaceAll("_", " ")}
      </OrderStatusTagText>
    </OrderStatusTag>
    <ProductDetail>{order.email}</ProductDetail>
    <ProductDetail>{order.address}</ProductDetail>
    <ProductDetail>Price: £{order.price}</ProductDetail>
    <ProductDetail>
      Order Placed: {new Date(order.order_placed).toDateString()}
    </ProductDetail>
  </Container>
);

export default OrderListItem;
