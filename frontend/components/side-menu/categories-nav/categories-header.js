import Link from "next/link"

export default async function CategoriesHeader() {
    const addCategoryHref = "/categories/create"

    return (
        <div>
            Categories:
            <Link href={addCategoryHref}>ADD</Link>
        </div>
    )
}
