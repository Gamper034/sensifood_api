-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "id_categorie" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCategorie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ProductCategorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductAllergens" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_barcode_key" ON "Product"("barcode");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductAllergens_AB_unique" ON "_ProductAllergens"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductAllergens_B_index" ON "_ProductAllergens"("B");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_id_categorie_fkey" FOREIGN KEY ("id_categorie") REFERENCES "ProductCategorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductAllergens" ADD CONSTRAINT "_ProductAllergens_A_fkey" FOREIGN KEY ("A") REFERENCES "Allergen"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductAllergens" ADD CONSTRAINT "_ProductAllergens_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
