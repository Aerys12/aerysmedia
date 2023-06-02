import fs from "fs";

export function getImageFiles(folder: String) {
	const imageDirectory = `./public/images/${folder}`; // Change this to the path of your images folder
	const imageFiles = fs.readdirSync(imageDirectory);
	return imageFiles;
}
