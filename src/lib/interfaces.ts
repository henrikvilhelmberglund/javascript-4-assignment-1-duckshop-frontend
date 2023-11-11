export interface IProduct {
	id: number;
	name: string;
	price: number;
	description: string;
	amount_in_stock: number;
	image_link: string;
}

export interface IProductsResponse {
	statusCode: number;
	message: string;
	mockData: IProduct[];
}

export interface MyError {
	cause: { code: string };
}
