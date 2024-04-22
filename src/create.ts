import { PrismaClient, userRole } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
	//! Create User
	// const createUser = await prisma.user.create({
	// 	data: {
	// 		userName: 'asif',
	// 		email: 'asif@gmail.com',
	// 		role: userRole.user
	// 	}
	// });

	//! Create Profile
	// const createProfile = await prisma.profile.create({
	// 	data: {
	// 		bio: 'I am a software engineer',
	// 		userId: 1
	// 	}
	// });

	//! Create Category
	// const createCategory = await prisma.category.create({
	// 	data: {
	// 		name: 'Programming'
	// 	}
	// });

	//! Create Post
	const createPost = await prisma.post.create({
		data: {
			title: 'How to learn programming',
			content: 'You can learn programming by doing',
			authorId: 1,
			postCategory: {
				//!for one to one relation
				// create: {
				// 	categoryId: 2
				// 	//! we can also use connect to connect with existing category
				// 	// category: {
				// 	// 	connect: {
				// 	// 		id: 1
				// 	// 	}
				// 	// }
				// }

				//!for one to many relation
				create: [
					{
						categoryId: 1
					},
					{
						categoryId: 2
					},
					{
						categoryId: 3
					}
				]
			}
		},
		include: {
			postCategory: true
		}
	});

	console.log({ createPost });
};
main();
