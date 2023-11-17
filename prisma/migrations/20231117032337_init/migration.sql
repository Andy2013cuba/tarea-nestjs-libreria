-- CreateTable
CREATE TABLE `Libro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `ISBN` VARCHAR(191) NOT NULL,
    `prestado` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Libro_ISBN_key`(`ISBN`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lector` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Prestamo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaDePrestamo` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lectorId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Prestamo` ADD CONSTRAINT `Prestamo_lectorId_fkey` FOREIGN KEY (`lectorId`) REFERENCES `Lector`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
