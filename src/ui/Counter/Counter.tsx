import { useEffect, useState } from "react";

import * as SC from "./CounterStyled"
import { CounterProps } from "../../utils/types";

const Counter:React.FC<CounterProps> = ({location}) => {
const targetDate = new Date("November 4, 2024 00:00:00").getTime();
const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  });

 
    return (
      <SC.CommonWrapper>
        <SC.MainTitle location={location}>
          coming <span>4 nov 2024</span>
        </SC.MainTitle>
        <SC.List>
          <SC.Item location={location}>
            <SC.Number location={location}>{timeLeft.days}</SC.Number>
            <SC.Title location={location}>days</SC.Title>
          </SC.Item>
          <SC.Item location={location}>
            <SC.Number location={location}>{timeLeft.hours} </SC.Number>
            <SC.Title location={location}>hours</SC.Title>
          </SC.Item>
          <SC.Item location={location}>
            <SC.Number location={location}>{timeLeft.minutes}</SC.Number>
            <SC.Title location={location}>min</SC.Title>
          </SC.Item>
          <SC.Item location={location}>
            <SC.Number location={location}>{timeLeft.seconds}</SC.Number>
            <SC.Title location={location}>sec</SC.Title>
          </SC.Item>
        </SC.List>
      </SC.CommonWrapper>
    );
}
 
export default Counter;