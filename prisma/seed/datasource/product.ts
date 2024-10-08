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

    }
]