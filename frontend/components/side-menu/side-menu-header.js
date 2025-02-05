import Link from "next/link"
import Image from "next/image"

import css from "./side-menu-header.module.css"

export default async function SideMenuHeader() {
    const addCategoryHref = "/categories/create"

    return (
        <div className={css.container}>
            <div className={css['categories-container']}>
                <span>Categories:</span>
                <Link href={addCategoryHref} className={css['add-link']}>
                    <Image
                        width={24}
                        height={24}
                        src='/add-circle-svgrepo-com.svg'
                        alt="add"
                    />
                </Link>
            </div>
        </div>
    )
}
