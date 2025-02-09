import Link from "next/link"
import Image from "next/image"
import css from "./side-menu-header.module.css"
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export default async function SideMenuHeader() {
    const addCategoryHref = "/categories/create"

    return (
        <div className={css.container}>
            <div className={css['categories-container']}>
                <span>Categories:</span>
                <Link href={addCategoryHref} className={css['add-link']}>
                    <ControlPointIcon  />
                </Link>
            </div>
        </div>
    )
}
