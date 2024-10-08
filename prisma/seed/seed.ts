import { PrismaClient } from '@prisma/client';
import { sourceAllergenCategorie } from './datasource/allergen-categories';
import { sourceAllergen } from './datasource/allergen';
import { sourceUser } from './datasource/user';
import { faker } from '@faker-js/faker';
import { sourceProductCategories } from './datasource/product-categories';
import { sourceProduct } from './datasource/product';

const prisma = new PrismaClient();


async function main() {
    // Créer les catégories d'allergènes
    await prisma.allergenCategorie.createMany({
        data: [
            { name: "Produits Laitiers" },
            { name: "Fruits à Coque" },
            { name: "Gluten" },
            { name: "Poissons et Fruits de Mer" },
            { name: "Oeufs" },
            { name: "Légumineuses" },
            { name: "Additifs Alimentaires" },
            { name: "Viande" },
            { name: "Soja" },
            { name: "Céréales" }
        ],
    })

    // Créer les allergènes
    await prisma.allergen.createMany({
        data: sourceAllergen
    });

    //Stockage des allergies
    const allergensList = await prisma.allergen.findMany();


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
                        allergensList.map(allergen => ({ id: allergen.id })),
                        faker.number.int({ min: 1, max: 4 })
                    )
                }
            },
        });
    }


    // Catégories de produits
    await prisma.productCategorie.createMany({
        data: sourceProductCategories
    });


    // Créer les produits
    // await prisma.product.createMany({
    //     data: sourceProduct
    // });

    //Créer les produits 
    for (const product of sourceProduct) {
        await prisma.product.create({
            data: product
        })
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