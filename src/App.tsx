import React, { useState, useEffect } from "react";
import generateRandomColor from "./components/randomhex";
import Buttons from "./components/Buttons";
function App() {
  const [color, setColor] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  function handleAnswers() {
    const actualColor = generateRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, generateRandomColor(), generateRandomColor()].sort(
        () => Math.random() - 0.5
      )
    );
  }

  function checkAnswer(answer: string) {
    if (answer === color) {
      setScore(score + 1);
      handleAnswers();
      setIsCorrect(true);
    } else {
      setScore(score - 1);
      handleAnswers();
      setIsCorrect(false);
  
    }
  }

  useEffect(() => {
    handleAnswers();
  }, []);

  useEffect(() => {
    if (score !== 0 && !hasStarted) {
      setHasStarted(true);
    }
  }, [score, hasStarted]);


  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-10 bg-gray-800 ">
      <h1 className="max-w-xl text-3xl font-bold text-[#e0def4] ">
        Guess
        <span className="rounded p-1" style={{ color: color }}>
          hex
        </span>
        value
      </h1>
      <div
        style={{ backgroundColor: color }}
        className="h-15 w-15 lg:h-50 lg:w-50 animate-bounce rounded  p-10 shadow-sm shadow-black"
      >
        
      </div>

      <div className="items-cen ter flex flex-row justify-center gap-5">
        <Buttons answers={answers} check={checkAnswer} />
      </div>

      { hasStarted && <p style={{color:isCorrect ? "#9ccfd8" : "#eb6f92"}} className="text-xl">{isCorrect ? "Correct !" : "Wrong !"}</p>}
      <h2 style={{color:score < 0 ? "#eb6f92" : "#9ccfd8" }} className="text-xl font-medium ">Score : <span className="ml-3">{score}</span></h2>
 
    </div>
  );
}

export default App;
