import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const interactive = async () => {
	const result = await prisma.$transaction(async (tx) => {
		// query 1
		const getUser = await tx.user.findMany();

		// query 2
		const countUser = await tx.user.count();

		// query 3
		const getPost = await tx.post.findMany();

		// return all the results
		return { getUser, countUser, getPost };
	});

	console.log(result);
};

interactive();
