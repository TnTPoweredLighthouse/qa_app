import Question from "./question"
import Answer from "./answer"

export default function QuestionsListItem({ question: q, showAnswer }) {
    const { question, answer } = q

    return (
        <>
            <Question body={question}></Question>

            {showAnswer ? <Answer body={answer} ></Answer> : null}

        </>
    )
}