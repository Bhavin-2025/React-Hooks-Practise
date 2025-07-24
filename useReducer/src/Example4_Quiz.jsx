import { useReducer } from "react";

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
];

const initialState = {
  currentQuestion: 0,
  score: 0,
  isFinished: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "ANSWER":
      const isCorrect =
        questions[state.currentQuestion].answer === action.payload;
      const nextQuestion = state.currentQuestion + 1;

      return {
        currentQuestion: nextQuestion,
        score: isCorrect ? state.score + 1 : state.score,
        isFinished: nextQuestion >= questions.length,
      };

    case "RESTART":
      return initialState;

    default:
      return state;
  }
}

export default function QuizApp() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const questionData = questions[state.currentQuestion];

  if (state.isFinished) {
    return (
      <div>
        <h2>Quiz Finished!</h2>
        <p>Your Score: {state.score} / {questions.length}</p>
        <button onClick={() => dispatch({ type: "RESTART" })}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Question {state.currentQuestion + 1}:</h2>
      <p>{questionData.question}</p>
      {questionData.options.map((option) => (
        <button
          key={option}
          onClick={() => dispatch({ type: "ANSWER", payload: option })}
          style={{ display: "block", margin: "5px 0" }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

