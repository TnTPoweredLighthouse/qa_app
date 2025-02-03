'use client'
import Link from "next/link"

import css from "./category-list-item.module.css"

export default function CategoryListItem({ category }) {
    const { name, id } = category
    const categoryEditHref = `/categories/${id}/edit`
    const categoryDetailsHref = `/categories/${id}`

    return (
        <div className={css.container}>
            <Link href={categoryDetailsHref}>{name}
            </Link>
            <div className={css['management']}>
                <span className={css['quantity-container']}>qty</span>
                <Link href={categoryEditHref}>Edit</Link>
            </div>
        </div>
    )
}