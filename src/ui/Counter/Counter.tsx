import * as SC from "./CounterStyled"

const Counter:React.FC = () => {
    return (
      <SC.List>
        <SC.Item>
          <SC.Number>47</SC.Number>
          <SC.Title>days</SC.Title>
        </SC.Item>
        <SC.Item>
          <SC.Number>07</SC.Number>
          <SC.Title>hours</SC.Title>
        </SC.Item>
        <SC.Item>
          <SC.Number>56</SC.Number>
          <SC.Title>min</SC.Title>
        </SC.Item>
        <SC.Item>
          <SC.Number>14</SC.Number>
          <SC.Title>sec</SC.Title>
        </SC.Item>
      </SC.List>
    );
}
 
export default Counter;