export interface MetricData {
  total_orders: number;
  total_orders_this_month: number;
  orders_in_progress: number;
  revenue: number;
}

export interface Order {
  order_id: number;
  order_placed: string;
  product_name: string;
  price: number;
  full_name: string;
  address: string;
  email: string;
  order_status: string;
}
