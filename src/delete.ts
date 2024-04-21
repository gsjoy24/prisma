import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deletePost = async () => {
	const deleteOne = await prisma.post.delete({
		where: {
			id: 1
		}
	});

	const deleteMany = await prisma.post.deleteMany({
		where: {
			published: false
		}
	});
};

deletePost();
