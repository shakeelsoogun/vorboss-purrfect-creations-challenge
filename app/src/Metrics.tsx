import styled from "styled-components";
import useApiFetch from "./apiHook";
import { MetricData } from "./datatypes";
import MetricBox from "./MetricBox";

const MetricsContainer = styled.div`
  display: flex;
`;

const Metrics = () => {
  const metricData = useApiFetch<MetricData>("/order/metric");

  if (!metricData) {
    return null;
  }

  return (
    <MetricsContainer>
      <MetricBox name="Total orders" value={metricData.total_orders} />
      <MetricBox
        name="Orders this month"
        value={metricData.total_orders_this_month}
      />
      <MetricBox name="In progress" value={metricData.orders_in_progress} />
      <MetricBox name="Revenue" value={metricData.revenue} currencySymbol="£" />
    </MetricsContainer>
  );
};

export default Metrics;
