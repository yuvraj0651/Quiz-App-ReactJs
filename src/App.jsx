import { useEffect, useState } from 'react'
import './App.css'
import QuizBox from './components/Quiz Box/QuizBox'

function App() {

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (showResult) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setShowResult(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000)


    return () => clearInterval(timer);
  }, [showResult])

  return (
    <>
      <div className="quiz-app section-padding">
        <div className="quiz-app__inner flex items-center justify-between">
          <div className="quiz-app__inner--heading text-center border border-[#ccc] shadow-sm shadow-[#ccc] py-2 w-[13rem] mx-auto rounded-[7px] bg-white">
            <h4 className='uppercase font-[500] tracking-wide text-[1.5rem]'>⚡ Quiz App</h4>
          </div>
          <div className="quiz-timer-block  text-center border border-[#ccc] shadow-sm shadow-[#ccc] py-2 w-[13rem] mx-auto rounded-[7px] bg-white">
            <p className='uppercase font-[500] py-1 tracking-wide text-[0.85rem]'>time left :- {timeLeft} seconds</p>
          </div>
        </div>
        <QuizBox
          currentQ={currentQ}
          setCurrentQ={setCurrentQ}
          score={score}
          setScore={setScore}
          showResult={showResult}
          setShowResult={setShowResult}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
        />
      </div>
    </>
  )
}

export default App
