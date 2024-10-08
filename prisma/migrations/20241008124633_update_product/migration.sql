/*
  Warnings:

  - You are about to drop the column `categorie_type` on the `AllergenCategorie` table. All the data in the column will be lost.
  - You are about to drop the `_ProductAllergens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_id_categorie_fkey";

-- DropForeignKey
ALTER TABLE "_ProductAllergens" DROP CONSTRAINT "_ProductAllergens_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductAllergens" DROP CONSTRAINT "_ProductAllergens_B_fkey";

-- DropIndex
DROP INDEX "AllergenCategorie_categorie_type_key";

-- DropIndex
DROP INDEX "Product_barcode_key";

-- AlterTable
ALTER TABLE "AllergenCategorie" DROP COLUMN "categorie_type";

-- DropTable
DROP TABLE "_ProductAllergens";

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
