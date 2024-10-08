/*
  Warnings:

  - You are about to drop the `ProductAllergen` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductAllergen" DROP CONSTRAINT "ProductAllergen_allergenId_fkey";

-- DropForeignKey
ALTER TABLE "ProductAllergen" DROP CONSTRAINT "ProductAllergen_productId_fkey";

-- DropTable
DROP TABLE "ProductAllergen";

-- CreateTable
CREATE TABLE "_ProductAllergens" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductAllergens_AB_unique" ON "_ProductAllergens"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductAllergens_B_index" ON "_ProductAllergens"("B");

-- AddForeignKey
ALTER TABLE "_ProductAllergens" ADD CONSTRAINT "_ProductAllergens_A_fkey" FOREIGN KEY ("A") REFERENCES "Allergen"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductAllergens" ADD CONSTRAINT "_ProductAllergens_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
