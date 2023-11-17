import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const lector1 = await prisma.lector.create({
    data: {
      nombre: 'Lector 1',
      // Otros campos si son necesarios
    },
  });

  const lector2 = await prisma.lector.create({
    data: {
      nombre: 'Lector 2',
      // Otros campos si son necesarios
    },
  });

  console.log({ lector1, lector2 });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
