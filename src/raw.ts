import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const raw = async () => {
	// const result = await prisma.$queryRaw`SELECT * FROM "users";`;
	await prisma.$queryRaw`TRUNCATE TABLE "categories" CASCADE;`;
};

raw();
