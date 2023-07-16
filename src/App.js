import { useEffect, useState } from "react";
import "./components/style.scss";
import QuestionWrapper from "./components/questionWrapper";
import { data } from "./components/data";
import { MoneyObject } from "./components/data";
import Timeout from "./components/timeout";
import Introduction from "./components/introduction";

function App() {
    const [userName, setUserName] = useState("");
    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [earnedMoney, setEarnMoney] = useState("$ 0");

    useEffect(() => {
        questionNumber > 1 &&
            setEarnMoney(
                MoneyObject.find((m) => m.id === questionNumber - 1).amount
            );
    }, [questionNumber, MoneyObject]);

    const handleReset = () => {
        setQuestionNumber(1);
        setStop(false);
        setEarnMoney("$ 0");
    };

    return (
        <div className="container">
            {userName.trim() ? (
                <>
                    <div className="mainPart">
                        {stop ? (
                            <div className="loseGameText">
                                <h1>You earned {earnedMoney}</h1>
                                <button onClick={handleReset}>Reset</button>
                            </div>
                        ) : (
                            <>
                                <div className="timerDiv">
                                    <div className="timerCircle">
                                        <Timeout
                                            setStop={setStop}
                                            questionNumber={questionNumber}
                                        />
                                    </div>
                                </div>
                                <div className="questionDiv">
                                    <QuestionWrapper
                                        data={data}
                                        questionNumber={questionNumber}
                                        setQuestionNumber={setQuestionNumber}
                                        setStop={setStop}
                                    />
                                </div>
                            </>
                        )}
                    </div>

                    <div className="moneyPart">
                        <ul>
                            {MoneyObject.map((m) => (
                                <li
                                    key={m.id}
                                    className={
                                        questionNumber === m.id ? "active" : ""
                                    }
                                >
                                    <span className="moneyNumber">{m.id}</span>
                                    <span>{m.amount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <Introduction setUserName={setUserName} />
            )}
        </div>
    );
}

export default App;
