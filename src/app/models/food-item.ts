export interface FoodItem {
        itemId: number;
        categoryId: number;
        name: string;
        description: string;
        price: number;
        imagepath: string;
        isAvailable: boolean;
        quantity?: number;
}
