import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpService } from '@nestjs/axios';
import { catchError, map, NotFoundError, Observable } from 'rxjs';
 

@Injectable()
export class ProductService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly httpService: HttpService
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

    async findAlternative(ean: string) {
        const product = this.findOne(ean);

        if (!product) {
            throw new NotFoundException('Produit non trouvé');
        }
        
    }

    
}
