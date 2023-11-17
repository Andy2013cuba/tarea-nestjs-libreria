/*
  Warnings:

  - You are about to drop the column `fechaDePrestamo` on the `prestamo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[libroId]` on the table `Prestamo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `libroId` to the `Prestamo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `prestamo` DROP COLUMN `fechaDePrestamo`,
    ADD COLUMN `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `libroId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Prestamo_libroId_key` ON `Prestamo`(`libroId`);

-- AddForeignKey
ALTER TABLE `Prestamo` ADD CONSTRAINT `Prestamo_libroId_fkey` FOREIGN KEY (`libroId`) REFERENCES `Libro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
