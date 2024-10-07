-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Allergen" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "id_categorie" INTEGER NOT NULL,

    CONSTRAINT "Allergen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AllergenCategorie" (
    "id" SERIAL NOT NULL,
    "categorie_type" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AllergenCategorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserAllergens" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Allergen_name_key" ON "Allergen"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AllergenCategorie_categorie_type_key" ON "AllergenCategorie"("categorie_type");

-- CreateIndex
CREATE UNIQUE INDEX "_UserAllergens_AB_unique" ON "_UserAllergens"("A", "B");

-- CreateIndex
CREATE INDEX "_UserAllergens_B_index" ON "_UserAllergens"("B");

-- AddForeignKey
ALTER TABLE "Allergen" ADD CONSTRAINT "Allergen_id_categorie_fkey" FOREIGN KEY ("id_categorie") REFERENCES "AllergenCategorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserAllergens" ADD CONSTRAINT "_UserAllergens_A_fkey" FOREIGN KEY ("A") REFERENCES "Allergen"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserAllergens" ADD CONSTRAINT "_UserAllergens_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
