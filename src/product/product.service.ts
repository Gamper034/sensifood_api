import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpService } from '@nestjs/axios';
import { catchError, map, NotFoundError, Observable } from 'rxjs';
import { AllergenDtoType } from 'src/dtos/user.dto';
import { AlternativeDtoType } from 'src/dtos/alternative.dto';
import { log } from 'console';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';
 

@Injectable()
export class ProductService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly httpService: HttpService,
        private readonly userService: UserService,
    ) {}


    async findOne(ean: string) {
        const product = await this.prisma.product.findFirst({
            where: { barcode: ean },
            include: {
                allergens: true, 
                categorie: true,
            },
        })
        if (!product) {
            throw new NotFoundException('Produit non trouvé');
        }
        return product;
    }

    async find(name: string) {
        const product = await this.prisma.product.findMany({
            where: {
                name: {
                    contains: name, mode: 'insensitive' } },
            include: {
                allergens: true,
                categorie: true,
            },
        });
        if (!product || product.length === 0) {
            throw new NotFoundException('Produit non trouvé');
        }
        return product;
    }

    async findReceipt(query: string) {
        const apiKey = '000ed250095e474fa03403847d3c9487';
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`;
        return this.httpService.get(url).pipe(
            map(response => response.data),
            catchError((error) => {
                throw new Error(`Erreur lors de la récupération des recettes : ${error.message}`);
            }),
        );
    }

    async findAlternative(alternatives: AlternativeDtoType) {
        const allergenIds = alternatives.allergens.map((allergen) => allergen.id);
        console.log(allergenIds, alternatives.category);
        const products = await this.prisma.product.findMany({
            where: {
                allergens: {
                    some: {
                        id: {
                            notIn: allergenIds,
                        },
                    },
                },
                categorie: {
                    name: alternatives.category,
                },
            },
            include: {
                allergens: true,
                categorie: true,
            },
        });
        console.log(products);
        if (!products || products.length === 0) {
            throw new NotFoundException('Produit non trouvé');
        }
        return products;

        
    }


    

    
}
