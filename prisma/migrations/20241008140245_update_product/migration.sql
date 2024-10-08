-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_id_categorie_fkey" FOREIGN KEY ("id_categorie") REFERENCES "ProductCategorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
