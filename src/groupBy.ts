import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const groupBy = async () => {
	const groupByAge = await prisma.post.groupBy({
		by: ['published'],
		_count: {
			published: true
		}
	});
	console.log(groupByAge);
};

groupBy();
