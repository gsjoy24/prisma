import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
	const createMany = await prisma.post.createMany({
		data: [
			{
				title: 'Prisma makes database access easy!',
				content: 'You can query your database with Prisma from the comfort of your favorite programming language.'
			},
			{
				title: 'Prisma makes database access easy!',
				content: 'You can query your database with Prisma from the comfort of your favorite programming language.'
			}
		]
	});
};
main();
