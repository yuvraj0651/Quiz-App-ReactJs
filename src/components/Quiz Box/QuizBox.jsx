import { QuizData } from "../Quiz Data/QuizData";

const QuizBox = ({ currentQ, setCurrentQ, score, setScore, showResult, setShowResult, selectedOption, setSelectedOption, setTimeLeft }) => {

    let questions = QuizData;

    const handleOption = (option) => {
        setSelectedOption(option);
        if (option === questions[currentQ].answer) {
            setScore(score + 1);
        }
        setTimeout(() => {
            if (currentQ < questions.length - 1) {
                setCurrentQ(currentQ + 1);
                setSelectedOption(null);
            } else {
                setShowResult(true);
            }
        }, 700);
    }

    const handleNext = () => {
        if (currentQ < questions.length - 1) {
            setCurrentQ(currentQ + 1);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQ(0);
        setShowResult(false);
        setSelectedOption(null);
        setScore(0);
        setTimeLeft(60);
    }

    return (
        <>
            <div className="quiz-box-section mt-8 w-[60rem] mx-auto">
                <div className="quiz-box__inner">
                    {!showResult ? (
                        <div className="mb-6 bg-white/20 p-5 pb-7 rounded-2xl border border-white/60 backdrop-blur-xl">
                            <h2 className="text-xl font-semibold text-white">
                                Q{currentQ + 1}. {questions[currentQ].question}
                            </h2>
                            <div className="grid gap-4 my-5">
                                {questions[currentQ].options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleOption(opt)}
                                        className={`mt-1 p-3 rounded-xl text-left font-semibold transition-all duration-300 border tracking-wide uppercase text-[0.9rem] ${selectedOption === opt
                                            ? opt === questions[currentQ].answer
                                                ? "bg-green-500/80 text-white border-green-300"
                                                : "bg-red-500/80 text-white border-red-300"
                                            : "bg-white/30 text-white border-white/40 hover:bg-white/70 hover:text-black"
                                            }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                            <button
                                className="mt-6 w-full bg-white/90 text-red-600 font-medium py-3 rounded-xl shadow-sm transition-all duration-300 text-lg hover:bg-red-600 hover:text-white"
                                onClick={handleNext}
                            >
                                Next ➜
                            </button>
                        </div>
                    ) : (
                        <div className="text-center text-white mt-5">
                            <h2 className="text-[1.3rem] font-semibold">🎉 Quiz Finished!</h2>
                            <p className="mt-4 text-[1.3rem] tracking-wide font-[500]">Your Score: {score} Correct</p>
                            <button
                                className="mt-4 w-full bg-white/90 text-red-600 font-bold py-3 rounded-xl shadow-xl hover:bg-red-600 transition-all duration-300 text-lg hover:text-white"
                                onClick={restartQuiz}
                            >
                                Restart Quiz 🔄
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default QuizBox