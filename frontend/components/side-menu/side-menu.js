import SideMenuHeader from "./side-menu-header"
import CategoriesList from "./categories/categories-list"
import Divider from "../common/divider"

import css from './side-menu.module.css'

export default async function CategoriesNav() {
    return (
        <div className={css.container}>
            < SideMenuHeader />
            < Divider />
            < CategoriesList />
        </div>
    )
}