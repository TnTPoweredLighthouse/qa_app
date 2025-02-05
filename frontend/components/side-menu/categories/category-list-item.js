'use client'
import Link from "next/link"
import Image from "next/image"

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
                <span className={css['quantity-container']}>{category.questionsQuantity || 'no-data'}</span>
                <Link className={css['edit-link']} href={categoryEditHref}>
                    <Image src='/edit-svgrepo-com.svg' alt="add" width={18} height={18}></Image>
                </Link>
            </div>
        </div>
    )
}