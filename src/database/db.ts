import { createConnection } from "typeorm";
import seeder from "../utils/seeder";

export default async function connectDB(): Promise<void> {
	try {
		await createConnection();
		console.log("DATABASE CONNECTED!");
		await seeder();
	} catch (err) {
		console.log(err);
	}
}
