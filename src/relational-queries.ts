import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const relationalQueries = async () => {
	//! find user with id 1 and include all posts
	// const findUser = await prisma.user.findUnique({
	// 	where: {
	// 		id: 1
	// 	},
	// 	include: {
	// 		post: true
	// 	}
	// })

	//! find users who have published posts
	const publishedPosts = await prisma.user.findMany({
		include: {
			post: {
				where: {
					published: true
				}
			}
		}
	});

	console.log(publishedPosts);
};

relationalQueries();
