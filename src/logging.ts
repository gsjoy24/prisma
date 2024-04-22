import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
	log: [
		{
			emit: 'event',
			level: 'query'
		}
	]
});

prisma.$on('query', (e) => {
	console.log('Query: ' + e.query);
	console.log('Duration: ' + e.duration + 'ms');
	console.log('Parameters: ' + e.params);
});
const logging = async () => {
	const log = await prisma.post.findMany();
	// console.log(log);
};

logging();
