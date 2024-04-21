import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const update = async () => {
	// const updateOne = await prisma.post.update({
	// 	where: {
	// 		id: 1
	// 	},
	// 	data: {
	// 		title: 'We have updated the title!'
	// 	}
	// });

	// const updateMany = await prisma.post.updateMany({
	// 	where: {
	// 		title: 'Prisma makes database access easy!'
	// 	},
	// 	data: {
	// 		published: true
	// 	}
	// });

	//! the upsert method is used to update a post if it exists, and create a new post if it does not exist
	const upsertData = await prisma.post.upsert({
		where: {
			id: 1
		},
		update: {
			title: 'We have updated the title!'
		},
		create: {
			title: 'We have created a new post!',
			content: 'This is the content of the new post!'
		}
	});
};
update();
