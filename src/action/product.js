"use server"

import { dbConnect, collections } from "@/lib/dbConnect";

export const getProducts = async () => {
    try {
        const productCollection = await dbConnect(collections.PRODUCT);
        const products = await productCollection.find().toArray();
        return products;
    } catch (error) {
        console.log(error);
    }
}