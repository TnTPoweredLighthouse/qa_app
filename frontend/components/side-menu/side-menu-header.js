import Link from "next/link"

import css from "./side-menu-header.module.css"

export default async function SideMenuHeader() {
    const addCategoryHref = "/categories/create"

    return (
        <div className={css.container}>
            <div className={css['categories-container']}>
                <span>Categories:</span>
                <Link href={addCategoryHref}>ADD</Link>
            </div>
        </div>
    )
}
