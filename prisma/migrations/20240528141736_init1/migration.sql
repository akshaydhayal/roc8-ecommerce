/*
  Warnings:

  - You are about to drop the column `categoryName` on the `Interest` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Interest` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Interest` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Interest_categoryName_key";

-- AlterTable
ALTER TABLE "Interest" DROP COLUMN "categoryName",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Interest_name_key" ON "Interest"("name");
