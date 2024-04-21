import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const paginationSorting = async () => {
	// offset pagination
	const offsetPagination = await prisma.post.findMany({
		skip: 2,
		take: 2
	});
	// console.log({ offsetPagination });

	// cursor based pagination
	const cursorPagination = await prisma.post.findMany({
		skip: 2,
		take: 2,
		cursor: {
			id: 2
		}
	});
	// console.log({ cursorPagination });

	// sorting
	const sorting = await prisma.post.findMany({
		orderBy: {
			title: 'desc'
		}
	});
};

paginationSorting();
