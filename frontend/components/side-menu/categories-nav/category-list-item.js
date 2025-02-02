'use client'

import Link from "next/link"

export default function CategoryListItem({ category }) {

    console.log(category)
    const { name, id } = category
    const categoryEditHref = `/categories/${id}/edit`
    const categoryDetailsHref = `/categories/${id}`

    return (
        <div>
            <Link href={categoryDetailsHref}>{name}</Link>
            <Link href={categoryEditHref}>Edit</Link>
        </div>
    )
}