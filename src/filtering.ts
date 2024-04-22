import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const filtering = async () => {
	// const andFilter = await prisma.post.findMany({
	//    where: {
	//       //! with the same way, we can use AND, OR, NOT
	// 		AND: [
	// 			{
	// 				title: {
	// 					contains: 'css'
	// 				}
	// 			}
	// 		]
	// 	}
	// });

	const inFilter = await prisma.post.findMany({
		where: {
			id: {
				in: [1, 2, 3]
			}
		}
	});
	console.log(inFilter);
};
filtering();
