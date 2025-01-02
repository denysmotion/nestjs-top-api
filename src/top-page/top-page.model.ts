export enum TopLevelCategory {
	Courses,
	Services,
	Boks,
	Products
}

export class TopPageModel {
	_id: string;
	firstCategory: TopLevelCategory;
	secondCategroy: string;
	title: string;
	category: string;
	hh?: {
		count: number;
		juniorSalary: number;
		middleSalary: number;
		seniorSalary: number;
	};
	advanteges: {
		title: string;
		description: string;
	}[];
	seoText: string;
	tagsTitle: string;
	tags: string[];
}
