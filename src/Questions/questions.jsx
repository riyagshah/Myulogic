import React, { useState,useEffect } from "react";
import Result from "../Result/result";
import moment from 'moment'

const Questions = () => {
  const questions = [
    {

      queImg: "https://en.testometrika.com/upload/questions/9a3/9a3e5c664c57fefe9781ed343a0b4224.svg",
      question: "1. Which shape should be in the rightmost cell with a question mark?",
      options: [
        { id: 1, answer: "https://en.testometrika.com/upload/answers/2ad/2ad96527ff3bdffc254b05985d90e670.svg", isCorrect: false },
        { id: 2, answer: "https://en.testometrika.com/upload/answers/743/743c194ea591850121774bbcea728cb7.svg", isCorrect: false },
        { id: 3, answer: "https://en.testometrika.com/upload/answers/3f4/3f48e60b405fe3a20ae80b4c1effe5be.svg", isCorrect: false },
        { id: 4, answer: "https://en.testometrika.com/upload/answers/af1/af154b81388bbe80d95a6c2d958090d3.svg", isCorrect: true },
        { id: 5, answer: "https://en.testometrika.com/upload/answers/282/2829b67f1ddb1c64a70b4ac754fc03c9.svg", isCorrect: false },
        { id: 6, answer: "https://en.testometrika.com/upload/answers/d63/d635d6a11058a01b5b6760b6638342fa.svg", isCorrect: false },
      ],
    },
    {
      queImg: "https://en.testometrika.com/upload/questions/61f/61f8311dc95818b190b639bb10e7ff0a.svg",
      question: "2. Which shape should be in the rightmost cell with a question mark?",
      options: [
        { answer: "https://en.testometrika.com/upload/answers/9a3/9a3eb223416f61ff5b9177914b70bd60.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/c4d/c4d606c7c886fc53ecee625417464a02.svg", isCorrect: true },
        { answer: "https://en.testometrika.com/upload/answers/b78/b7854d51e6fc99a7051b4eafe549ccdd.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/b9d/b9db4988f489cc0410930f09bb287963.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/174/174cc63476713040f570f0ffabf5d5a4.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/75b/75b18f06da1aeff34f41634dcb126b57.svg", isCorrect: false },
      ],
    },

    {
      queImg: "https://en.testometrika.com/upload/questions/56e/56e7575fce5c66102f68965309041c81.svg",
      question: "3. Which shape should be in the rightmost cell with a question mark?",
      options: [
        { answer: "https://en.testometrika.com/upload/answers/7f1/7f11134a286731f010982d5d79e8cd26.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/e3c/e3c50d49dd3e826c711e33eed9e6b9cb.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/370/370cd583ba4fe1ed516fa59e729ddf69.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/078/078f9d02c28538a24e685aa90ef651e3.svg", isCorrect: true },
        { answer: "https://en.testometrika.com/upload/answers/52e/52e67d35e0f5d7ac65d639f7d74737b1.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/110/1108829aabfbc040dee01c20198f57be.svg", isCorrect: false }
      ],
    },

    {
      queImg: " https://en.testometrika.com/upload/questions/a81/a81ad1de8cfdbb5d180ea3fd50a3bacc.svg",
      question: "4. Which shape should be in the rightmost cell with a question mark?",
      options: [
        { answer: "https://en.testometrika.com/upload/answers/99f/99f5c77985a1b200e9141fdd2ccf7b2d.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/071/0713aa121f002ad9bc4ae153eeb8e39d.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/67d/67d393aef6640deb3010b31f3b9cc95f.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/be5/be506b556903eb28735313c3f34c3e34.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/fea/feae0c9007450070ab504d2a9d250d5d.svg", isCorrect: true },
        { answer: "https://en.testometrika.com/upload/answers/60d/60d396000687765f149079a2effb9e82.svg", isCorrect: false }
      ],
    },

    {
      queImg: " https://en.testometrika.com/upload/questions/a84/a840c4e1d62823491d4fa2e03730cfe1.svg",
      question: "5. Which shape should be in the rightmost cell with a question mark?",
      options: [
        { answer: "https://en.testometrika.com/upload/answers/ad4/ad4b821d3e138226e71ba2cb4f264eef.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/fcd/fcdcdb73eda8bb8fa0e0a41ce823aa0f.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/ff2/ff2627f18be55c1b49bae14010c04251.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/782/7825e330fe924d2a57f0707552dc5253.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/4b0/4b0e932a6a92559edb7de27143b0f630.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/4a5/4a5c07bab54b36da281e942add14f6e3.svg", isCorrect: false },
      ],
    },
  ];

  const [curques, setcurques] = useState(0);
  const [displayScore, setdispScore] = useState(false);
  const [score, setScore] = useState(0);
 
  const [seconds, setSeconds] = useState(0)
  const [startinterval, setstartinterval] = useState(true);

  useEffect(() => {
    let startintervalcount = null;
    if (startinterval ) {
      startintervalcount = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
      clearInterval(startintervalcount);
    }
    return () => {
      clearInterval(startintervalcount);
    };
  }, [startinterval]);

  
  const checkAns = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (curques < questions.length - 1) {
      setcurques(curques + 1);
    } 

    else {
      setstartinterval(false)
      setdispScore(true);
    }
  };
  function handleRetryClick() {
    setcurques(0);
    setdispScore(false);
    setScore(0);
    setstartinterval(true)
    setSeconds(0)
  }
const back=()=>{
  setcurques(curques-1)
}
  return (
    <div className='app'>
      {displayScore ? (
        <Result score={score} handleRetryClick={handleRetryClick} questions={questions} duration={moment.utc(seconds*1000).format('HH:mm:ss')}/>
      ) : (
        <div className="ques-ans">
          <div className='question-section'>
            <div className='question-count'>
              <span>{curques + 1}</span>/{questions.length}
            </div>
            <div className='que-img'>{<img src={questions[curques].queImg} />}</div>
            <div className='question-text'>{questions[curques].question}</div>
          </div>
          <div className='answer-section'>
            {questions[curques].options.map((option) => (
              <button onClick={() => checkAns(option.isCorrect)}>{<img key={option.id} src={option.answer} alt="can't show image" />}</button>
            ))}
        
          </div>
          <div>
            {
        curques>=1 ?  (<button className="but"   onClick={back}><img className="arow" src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt=""/></button>
        ):null
            }
            
          </div>
        </div>
      )}
    </div>
  );

}

export default Questions;