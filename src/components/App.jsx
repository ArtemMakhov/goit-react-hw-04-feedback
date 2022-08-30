import { GlobalStyle } from "./GlobalStyle";
import { Component } from "react";
import { Section } from "./Section/Section";
import { Feedback } from './Feedback/Feedback';
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeStat = e => {
    
    const element = e.target.innerText.toLowerCase();
    this.setState(prevState => ({
      [element]: prevState[element] + 1,
    }));
  };

   countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return [good, neutral, bad].reduce((acc, num) => acc + num, 0);
  };

   
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback options={Object.keys(this.state)}
            onLeaveFeedback={this.changeStat}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />
          ) : (<Notification message="There is no feedback"
          />
          )}
        </Section>
        <GlobalStyle/>
      </>
    )
  }
}





