-- CreateTable
CREATE TABLE "LogProduct" (
    "id" SERIAL NOT NULL,
    "id_product" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LogProduct" ADD CONSTRAINT "LogProduct_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogProduct" ADD CONSTRAINT "LogProduct_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
