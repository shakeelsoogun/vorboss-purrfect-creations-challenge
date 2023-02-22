import { useEffect, useState } from "react";
import styled from "styled-components";
import fetchData from "./api";
import MetricBox from "./MetricBox";

const MetricsContainer = styled.div`
  display: flex;
`;

interface Data {
  total_orders: number;
  total_orders_this_month: number;
  orders_in_progress: number;
  revenue: number;
}

const Metrics = () => {
  // Make API call to /order/metric to get metric data
  const [metricData, setMetricData] = useState<Data | null>(null);

  useEffect(() => {
    let closurePackage = { isCleaningUp: false };
    fetchData<Data>("/order/metric").then((data) => {
      if (!closurePackage.isCleaningUp) {
        setMetricData(data);
      }
    });

    return () => {
      closurePackage.isCleaningUp = true;
    };
  }, []);

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
