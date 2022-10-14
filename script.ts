import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // await prisma.user.deleteMany()
    const user = await prisma.user.create({
        data: {
            name: 'Molly',
            age: 19,
            email: 'Molly@test4.com',
            userPreference: { create: { emailUpdates: true } },
        },
        include: { userPreference: true },
    })
    console.log(user)
}

//FIND
// async function main() {
//     const user = await prisma.user.findMany({
//         where: { name: 'Molly' },
//         orderBy: { age: 'asc' },
//         // skip: 1, //pagination
//         // take: 2,
//     })
//     console.log(user)
// }

//UPDATE
// async function main() {
//     const user = await prisma.user.update({
//         where: { email: 'Molly@test2.com' },
//         data: { email: 'Molly@updated2.com' },
//     })
//     console.log(user)
// }

main()
    .catch((e) => console.log(e.message))
    .finally(async () => {
        await prisma.$disconnect
    })
