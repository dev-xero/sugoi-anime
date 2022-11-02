import { Document } from "mongoose";

interface UserModelInterface extends Document {
	username: string,
	name: string,
	googleID: string,
	secret: string
}

export default UserModelInterface