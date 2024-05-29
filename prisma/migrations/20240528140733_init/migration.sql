/*
  Warnings:

  - You are about to drop the `Interests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Interests";

-- CreateTable
CREATE TABLE "Interest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Interest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Interest_name_key" ON "Interest"("name");
