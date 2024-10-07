import { PrismaClient } from '@prisma/client';
import { sourceAllergenCategorie } from './datasource/allergen-categories';
import { sourceAllergen } from './datasource/allergen';
import { sourceUser } from './datasource/user';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();


async function main() {
    // Créer les catégories d'allergènes
    await prisma.allergenCategorie.createMany({
        data: sourceAllergenCategorie

    });

    // Créer les allergènes
    await prisma.allergen.createMany({
        data: sourceAllergen
    });

    //Stockage des allergies
    const allergens = await prisma.allergen.findMany();


    for (const user of sourceUser) {
        await prisma.user.create({
            data: {
                email: user.email,
                password: user.password,
                age: user.age,
                firstname: user.firstname,
                lastname: user.lastname,
                gender: user.gender,
                allergens: {
                    connect: faker.helpers.arrayElements(
                        allergens.map(allergen => ({ id: allergen.id })),
                        faker.number.int({ min: 1, max: 4 })
                    )
                }
            },
        });
    }


}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });