import { useEffect, useState, memo } from "react";

function QuestionWrapper({ data, setQuestionNumber, questionNumber, setStop }) {
    const [curretnQuestion, setCurrentQuestion] = useState(null);
    const [className, setClassName] = useState("answer");
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        setCurrentQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

    const handleClick = (e) => {
        setSelectedAnswer(e);
        setClassName(e.correct ? "answer correct" : "answer incorrect");
        setTimeout(() => {
            if (e.correct) {
                setQuestionNumber((prev) => prev + 1);
                setCurrentQuestion(null);
            } else {
                setStop(true);
            }
        }, 3000);
    };

    return (
        <div className="QuestionsWrapper">
            <div className="questionBox">{curretnQuestion?.question}</div>
            <div className="answers">
                {curretnQuestion?.answers.map((e) => (
                    <div
                        className={selectedAnswer === e ? className : "answer"}
                        key={e.id}
                        onClick={() => handleClick(e)}
                    >
                        {e.text}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default memo(QuestionWrapper);
