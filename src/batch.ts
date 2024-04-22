import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const batch = async () => {
	const addUser = prisma.user.create({
		data: {
			userName: 'John Doe',
			email: 'john@gmail.com',
			age: 25
		}
	});

	const updateUser = prisma.user.update({
		where: { id: 11 },
		data: {
			age: 30
		}
	});

	const [user, updatedUser] = await prisma.$transaction([addUser, updateUser]);

	console.log(user, updatedUser);
};

batch();
