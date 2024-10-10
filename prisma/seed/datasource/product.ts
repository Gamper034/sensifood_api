export const sourceProduct = [
    {
        "name":"Lait demi ecreme",
        "brand":"Envia",
        "barcode":"20681968",
        // "allergens": [{ "id": 1, "name": "Lait", "id_categorie": 1 }, { "id": 2, "name": "Lactose", "id_categorie": 1 }],
        "allergens": {
            connect: [
                { id: 1 }, // Associe l'allergène "Produits Laitiers"
                { id: 2 }  // Associe l'allergène "Gluten"
            ],
        },
        "ingredients":"Lait demi-écrémé (Origine : France) stérilisé UHT, issu de vaches nourries sans OGM (&lt;0,9%)",
        "image":"https://images.openfoodfacts.net/images/products/20681968/front_fr.69.400.jpg",
        // "id_categorie":1,
        "categorie": {
            connect: {
                id: 1,
            },
        },

    },
    {
        "name": "Épeautre noisette",
        "brand": "Bjorg",
        "barcode": "3229820783338",
        // "allergens": [{ "id": 7, "name": "Noix", "id_categorie": 2 }, { "id": 9, "name": "Gluten", "id_categorie": 3 }],
        "allergens": {
            connect: [
                { id: 7 }, // Associe l'allergène "Produits Laitiers"
                { id: 9 }  // Associe l'allergène "Gluten"
            ],
        },
        "ingredients": "Eau, épeautre* 7%, riz* 6%, noisettes* 3%, avoine* 2,2%, huile de tournesol* pressée à froid, sel marin.\r\n\r\n*bio",
        "image": "https://images.openfoodfacts.net/images/products/322/982/078/3338/front_fr.175.400.jpg",
        // "id_categorie": 1,
        "categorie": {
            connect: {
                id: 1,
            },
        },

    },
    {
        "name": "Amande chocolat",
        "brand": "Bjorg",
        "barcode": "3229820784946",
        // "allergens": [{ "id": 7, "name": "Noix", "id_categorie": 2 }],
        "allergens": {
            connect: [
                { id: 7 }, // Associe l'allergène "Produits Laitiers"
            ],
        },
        "ingredients": "Lait d'amandes* (eau, amandes* 2,2%), Sucre de canne*, Amidon de riz*, Cacao* dégraissé en poudre, Chocolat* 1% (sucre de canne*, pâte de cacao*, beurre de cacao*, extrait de vanille*), Stabilisants: gomme guar*, gomme xanthane, Sel marin. \r\n\r\n*Ingrédients biologiques.",
        "image": "https://images.openfoodfacts.net/images/products/322/982/078/4946/front_fr.107.400.jpg",
        // "id_categorie": 1,
        "categorie": {
            connect: {
                id: 1,
            },
        },

    },
    {
        "name": "Nutella biscuits t22",
        "brand": "Ferrero",
        "barcode": "8000500310427",
        // "allergens": [{ "id": 7, "name": "Noix", "id_categorie": 2 }],
        "allergens": {
            connect: [
                { id: 1 }, // Associe l'allergène "Produits Laitiers"
                { id: 7 },
                { id: 9 }
            ],
        },
        "ingredients": "Pâte à tartiner aux NOISETTES et au cacao 40% (sucre, huile de palme, NOISETTES 13%, LAIT écrémé en poudre 8,7%, cacao maigre 7,4%, émulsifiants : lécithines [SOJA] ; vanilline), farine de FROMENT 32%, graisses végétales (palme, palmiste), sucre de canne 8,5%, LACTOSE, son de BLE, LAIT en poudre, extrait en poudre de malt d'ORGE et de maïs, miel, poudres à lever (disphosphate disodique, carbonate acide d'ammonium, carbonate acide de sodium), cacao maigre, sel, amidon de FROMENT, farine d'ORGE malté, émulsifiants : lécithines [SOJA] ; vanilline.",
        "image": "https://images.openfoodfacts.org/images/products/800/050/031/0427/front_fr.356.400.jpg",
        // "id_categorie": 1,
        "categorie": {
            connect: {
                id: 3,
            },
        },

    },
    {
        "name": "SS GLUT MADELEINES - Gerblé - 200 g",
        "brand": "Gerblé",
        "barcode": "3175681054158",
        // "allergens": [{ "id": 7, "name": "Noix", "id_categorie": 2 }],
        "allergens": {
            connect: [
                { id: 17 }, // Associe l'allergène "Produits Laitiers"
            ],
        },
        "ingredients": "Œufs 28,8%, huile de colza, fécule de pomme de terre, farine de riz 13,3%, sucre, dextrose, humectant glycérol, sirop de glucose, fibres de chicorée : inuline, arômes, épaississant: gomme guar, amidon de riz, émulsifiant : lecithines de colza, poudres à lever acide citrique et carbonates de sodium, sel, alcool éthylique.",
        "image": "https://images.openfoodfacts.org/images/products/317/568/105/4158/front_fr.46.400.jpg",
        // "id_categorie": 1,
        "categorie": {
            connect: {
                id: 3,
            },
        },

    },
    {
        "name": "petit déjeuner miel et pépites de chocolat - belvita - 435 g",
        "brand": "Belvita",
        "barcode": "16811207",
        // "allergens": [{ "id": 7, "name": "Noix", "id_categorie": 2 }],
        "allergens": {
            connect: [
                { id: 1 }, // Associe l'allergène "Produits Laitiers"
            ],
        },
        "ingredients": "Cocoa mass #, cane sugar #, cocoa butter #, vanilla extract #. # = Certified Organic. May contain nuts, milk. ORGANIC CHOCOLATE: MINIMUM COCOA SOLIDS 70 %.",
        "image": "https://images.openfoodfacts.org/images/products/000/001/681/1207/front_fr.80.400.jpg",
        // "id_categorie": 1,
        "categorie": {
            connect: {
                id: 3,
            },
        },

    }
]