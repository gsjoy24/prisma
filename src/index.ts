import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
	// const result = await prisma.post.create({
	// 	data: {
	// 		title: 'Prisma makes database access easy!',
	// 		content: 'You can query your database with Prisma from the comfort of your favorite programming language.'
	// 	}
	// });
	// const allPosts = await prisma.post.findMany();
	// console.log(allPosts);
};
main();
