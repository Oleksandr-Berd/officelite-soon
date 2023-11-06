import { useEffect, useState } from "react";

import * as SC from "./CounterStyled"

const Counter:React.FC = () => {
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
    <SC.List>
      <SC.Item>
        <SC.Number>{timeLeft.days}</SC.Number>
        <SC.Title>days</SC.Title>
      </SC.Item>
      <SC.Item>
        <SC.Number>{timeLeft.hours} </SC.Number>
        <SC.Title>hours</SC.Title>
      </SC.Item>
      <SC.Item>
        <SC.Number>{timeLeft.minutes}</SC.Number>
        <SC.Title>min</SC.Title>
      </SC.Item>
      <SC.Item>
        <SC.Number>{timeLeft.seconds}</SC.Number>
        <SC.Title>sec</SC.Title>
      </SC.Item>
    </SC.List>
  );
}
 
export default Counter;