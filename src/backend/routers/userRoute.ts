import { createRouter } from '@/backend/utils/createRouter';
import { z } from 'zod';

export const userRoute = createRouter().query('getUserById', {
	input: z.object({ id: z.string() }),
	async resolve({ input }) {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/users/${input.id}`
		);
		const user = await res.json();
		return { success: true, user };
	},
});
