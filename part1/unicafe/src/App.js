import { useState } from "react";


const StatisticsLine = ({ text, value }) => <td>{text} {value}</td>

const Statistics = ({ good, neutral, bad }) => {

  const calcAverage = () => (good - bad) / (good + neutral + bad)
  const calcPositive = () => (good / (good + neutral + bad)) * 100

  return (
    <div>
      <h1>statistics</h1>
      {good + neutral + bad !== 0 ?

        <div>

          <table>
            <tbody>
              <tr>
                <StatisticsLine text="good" value={good} />
              </tr>
              <tr>
                <StatisticsLine text="neutral" value={neutral} />
              </tr>
              <tr>
                <StatisticsLine text="bad" value={bad} />
              </tr>

              <tr>
                <td>all {good + neutral + bad}</td>
              </tr>
              <tr>
                <td>average {calcAverage()}</td>
              </tr>
              <tr>
                <td>positive {calcPositive()} %</td>
              </tr>
            </tbody>
          </table>

        </div>

        :

        <div>
          <p>No feedback given</p>
        </div>
      }
    </div>
  )
}

const Button = ({ handler, text }) => <button onClick={handler}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <Button handler={() => setGood(good + 1)} text="good" />
      <Button handler={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handler={() => setBad(bad + 1)} text="bad" />


      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
