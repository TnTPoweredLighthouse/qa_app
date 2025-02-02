export default async function EditCategory({ params }) {

    const { category } = await params;

    return (
        <div>Edit existing category: {category}</div>
    );
}
