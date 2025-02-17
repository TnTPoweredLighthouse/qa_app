import Link from "next/link";
import Image from "next/image";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CategoryListItem({ category }) {
    const { name, id } = category
    const categoryEditHref = `/categories/${id}/edit`
    const categoryDetailsHref = `/categories/${id}`

    return (
        <Card sx={{ borderRadius: 4, padding: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            <Box sx={{ width: 'inherit', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                <Link href={categoryDetailsHref}>{name}</Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography component="span" sx={{ paddingX: 1 }}>{category.questionsQuantity || 'no-data'}</Typography>
                <Box sx={{ paddingX: 1 }}>
                    <Link href={categoryEditHref}>
                        <Image src='/edit-svgrepo-com.svg' alt="add" width={18} height={18} />
                    </Link>
                </Box>
            </Box>
        </Card>
    )
}