import QuestionsList from "@/components/questions/questions-list";

export default async function Category({ params }) {
    const { category } = await params

    return (
        <QuestionsList category={category}></QuestionsList>
    );
}
