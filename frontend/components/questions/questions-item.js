import Question from "./question"
import Answer from "./answer"

export default function QuestionsItem({ question: q }) {
    const { question, answer } = q

    return (
        <>
            <Question body={question}></Question>
            <Answer body={answer} ></Answer>
        </>
    )
}