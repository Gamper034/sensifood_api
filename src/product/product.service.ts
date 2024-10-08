import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpService } from '@nestjs/axios';
import { catchError, map, NotFoundError, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
 

@Injectable()
export class ProductService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly httpService: HttpService
    ) {}

    // async getProduct(ean: string) {
    //     const productInfo = await this.getOpenFactFoodProduct(ean).toPromise();
    //     const comparedCategory = productInfo['product']['compared_to_category'].split(':')[1];
    //     console.log(comparedCategory);

    //     const productReceipt = await this.getReceiptProduct(comparedCategory).toPromise();

    //     const product = {
    //         "code": productInfo['code'],
    //         "name": productInfo['product']['product_name'],
    //         "allergens": productInfo['product']['allergens_tags'].map((allergen: string) => allergen.split(':')[1]),
    //         "image": productInfo['product']['image_url'],
    //         "ingredients": productInfo['product']['ingredients_text'],
    //         "brands": productInfo['product']['brands'],
    //         "category": comparedCategory,

    //     }

    //     const receipt = productReceipt['results'].map((receipt: any) => ({
    //         "id": receipt['id'],
    //         "title": receipt['title'],
    //         "image": receipt['image'],
    //     }));

    //     return {
    //         product,
    //         receipt,

    //     }


       
    // }

    // getFindAlternatives(category: string, myAllergens: string[]): Observable<AxiosResponse<any>>{
    //     const url = `https://world.openfoodfacts.net/api/v2/category/en:${category}`;
        
    // }

    async getProduct(ean: string) {
        const product = await this.prisma.product.findFirst({
            where: { barcode: ean },
            include: {
                allergens: true, 
            },
        })

        if (!product) {
            throw new NotFoundException('Produit non trouvé');
        }

        return product;
    }

    getOpenFactFoodProduct(ean: string): Observable<AxiosResponse<any>> {
        const url = `https://world.openfoodfacts.net/api/v2/product/${ean}`;
        return this.httpService.get(url).pipe(
            map(response => response.data),
            catchError((error) => {
                throw new Error(`Erreur lors de la récupération du produit : ${error.message}`);
            }),
        );
    }

    getReceiptProduct(query: string): Observable<AxiosResponse<any>> {
        const apiKey = '000ed250095e474fa03403847d3c9487';
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`;
        return this.httpService.get(url).pipe(
            map(response => response.data),
            catchError((error) => {
                throw new Error(`Erreur lors de la récupération des recettes : ${error.message}`);
            }),
        );
    }

    
}
