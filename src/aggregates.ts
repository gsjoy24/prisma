import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const aggregates = async () => {
	// const count = await prisma.user.count();

	//! similarly we can use _sum, _min, _max, _avg, _count.
	const avgAge = await prisma.user.aggregate({
		_avg: {
			age: true
		}
	});
	console.log(avgAge);
};

aggregates();
