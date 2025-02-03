import css from '../../../main-view-placeholder.module.css'

export default async function EditCategory({ params }) {

    const { category } = await params;

    return (
        <div className={css.container}>Edit existing category: {category} [in progress] </div>
    );
}
