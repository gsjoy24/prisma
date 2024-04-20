import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
	// find all posts
	const allPosts = await prisma.post.findMany();
	// find first post with id 8 or throw an error if not found
	const findFirst = await prisma.post.findFirstOrThrow({
		where: {
			id: 1
		}
	});

	// find post with a unique id, we have to provide the id of the post, because it is unique. if the property is not unique, we can use the where clause to find the post
	const findUnique = await prisma.post.findUnique({
		where: {
			id: 1 // the id property is unique in the post model
		}
	});
};

main();
