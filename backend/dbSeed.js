import dbSource, { User } from "./datasource.js"

export default async function () {
    console.log('db seeding in progress...')
    try {
        const seedUser = new User({ name: "Sid" })
        await seedUser.save()
    } catch (e) {
        console.log('Failed to seed DB, ', e)
    }

    console.log('db seed done.')
}