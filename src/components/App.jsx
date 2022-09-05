import { GlobalStyle } from "./GlobalStyle";
import { useState } from "react";
import { Section } from "./Section/Section";
import { Feedback } from './Feedback/Feedback';
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        throw new Error(`Unknows feedback type - ${ type }`);
    }
  };

  const  countTotalFeedback = () => {
    return [good, neutral, bad].reduce((acc, num) => acc + num, 0);
  };

  const total = countTotalFeedback();

  const  countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />) : (<Notification message="There is no feedback"
        />)}
      </Section>
      <GlobalStyle />
    </>
  );

}
  





