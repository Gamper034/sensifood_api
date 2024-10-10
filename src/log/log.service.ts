import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LogService {

    constructor(
        private readonly prisma: PrismaService,
        private readonly userService: UserService
    ) {}


    async setLog(ean: string, token: string) {

        const userId = await this.userService.getIdFromToken(token);

        const product = await this.prisma.product.findFirst({
            where: { barcode: ean },
        })

        if (!product) {
            throw new NotFoundException('Produit non trouvé');
        }

        await this.prisma.logProduct.create({
            data: {
                product: {
                    connect: {
                        id: product.id,
                    },
                },
                user: {
                    connect: {
                        id: userId,
                    },
                },
            },
        })
    }

    async getLogs(token: string) {

        const userId = await this.userService.getIdFromToken(token);
        const logs = await this.prisma.logProduct.findMany({
            where: {
                id_user: userId,
            },
            include: {
                product: true,
            },
            take: 5,
            orderBy: {
                date: 'desc',
            },
        });
        return logs;
    }
}
