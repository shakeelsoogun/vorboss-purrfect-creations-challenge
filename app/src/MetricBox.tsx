import styled from "styled-components";
import Box from "./Box";
import Subheader from "./SubHeader";

const MetricBoxContainer = styled(Box)`
  flex: 1;
  display: flex;
`;

const CircleContainer = styled.div`
  flex: 0;
  margin-right: 1em;
  margin-top: 0.15em;
`;

const Circle = styled.div`
  border-radius: 50%;
  height: 1em;
  width: 1em;
  background-color: ${({ theme }) => theme.primaryColors.blue};
`;

const MetricContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BoxHeader = styled(Subheader)`
  flex: 1;
`;

const Value = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 2em;
  margin: 0;
`;
interface Props {
  name: string;
  value: number;
  currencySymbol?: string;
}

const MetricBox = ({ name, value, currencySymbol }: Props) => {
  return (
    <MetricBoxContainer>
      <CircleContainer>
        <Circle></Circle>
      </CircleContainer>
      <MetricContainer>
        <BoxHeader>{name}</BoxHeader>
        <Value>{currencySymbol ? `${currencySymbol}${value}` : value}</Value>
      </MetricContainer>
    </MetricBoxContainer>
  );
};

export default MetricBox;
