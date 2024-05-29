/*
  Warnings:

  - You are about to drop the `Interest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Interest";

-- CreateTable
CREATE TABLE "Interestss" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Interestss_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Interestss_name_key" ON "Interestss"("name");
