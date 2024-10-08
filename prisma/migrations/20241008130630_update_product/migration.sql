/*
  Warnings:

  - You are about to drop the `_AllergenToProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AllergenToProduct" DROP CONSTRAINT "_AllergenToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_AllergenToProduct" DROP CONSTRAINT "_AllergenToProduct_B_fkey";

-- DropTable
DROP TABLE "_AllergenToProduct";

-- CreateTable
CREATE TABLE "ProductAllergen" (
    "productId" INTEGER NOT NULL,
    "allergenId" INTEGER NOT NULL,

    CONSTRAINT "ProductAllergen_pkey" PRIMARY KEY ("productId","allergenId")
);

-- AddForeignKey
ALTER TABLE "ProductAllergen" ADD CONSTRAINT "ProductAllergen_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductAllergen" ADD CONSTRAINT "ProductAllergen_allergenId_fkey" FOREIGN KEY ("allergenId") REFERENCES "Allergen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
