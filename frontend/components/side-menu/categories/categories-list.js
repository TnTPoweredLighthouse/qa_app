'use client'

import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '@/lib/http.js'
import CategoryListItem from "./category-list-item";

import css from './categories-list.module.css'

export default function CategoriesList() {
    const { data: categories, isLoading, isError, error } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => await fetchCategories(),
    });

    if (isLoading) {
        return (
            <div >
                <p>Pending fetching categories data...</p>
            </div>
        );
    }

    if (isError) {
        return (
            <div>
                Error fetching categories
            </div>
        )
    }

    if (categories) {
        return (
            <div className={css.container}>
                <ul>
                    {categories.map(category => {
                        return (
                            <li key={category.id}>
                                <CategoryListItem category={category} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

}