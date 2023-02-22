import styled from "styled-components";
import MetricBox from "./MetricBox";

const MetricsContainer = styled.div`
  display: flex;
`;

const Metrics = () => {
  // Make API call to /order/metric to get metric data

  return (
    <MetricsContainer>
      <MetricBox name="Total orders" value={750} />
      <MetricBox name="Orders this month" value={0} />
      <MetricBox name="In progress" value={250} />
      <MetricBox name="Revenue" value={80000} currencySymbol="£" />
    </MetricsContainer>
  );
};

export default Metrics;
