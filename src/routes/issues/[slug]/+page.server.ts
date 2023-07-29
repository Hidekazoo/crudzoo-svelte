import { error } from '@sveltejs/kit';
export interface IssuesPageProps {
	title: string;
}
export async function load({ params }): Promise<IssuesPageProps> {
	return {
		title: '課題個別ページ'
	};
}
