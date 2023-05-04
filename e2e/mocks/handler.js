import { rest } from 'msw';

export const handlers = [
	rest.get('/v1/health', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ status: 'success' }));
	})
];
