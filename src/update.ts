import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const update = async () => {
	const updateOne = await prisma.post.update({
		where: {
			id: 1
		},
		data: {
			title: 'We have updated the title!'
		}
	});

	const updateMany = await prisma.post.updateMany({
		where: {
			title: 'Prisma makes database access easy!'
		},
		data: {
			published: true
		}
	});
};
update();
