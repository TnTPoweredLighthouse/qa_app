import Question from "./question"
import Answer from "./answer"

export default function QuestionsListItem({ question: q, hideAnswer }) {
    const { question, answer } = q

    return (
        <>
            <Question body={question}></Question>

            {hideAnswer ? <></> : <Answer body={answer} ></Answer>}

        </>
    )
}