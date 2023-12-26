import { prisma } from "../../../db";
import AWS from "aws-sdk";
AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: "ca-central-1", // region of your bucket
});

const s3 = new AWS.S3();

const onFileUpload = async (files: FileList) => {
	//console.log("testing this out");
	Array.from(files).forEach(async (selectedFile) => {
		// Set up the parameters for the S3 upload
		const params = {
			Bucket: process.env.AWS_BUCKET_NAME,
			Key: selectedFile.name, // File name you want to save as in S3
			Body: selectedFile,
		};

		// Uploading files to the bucket
		s3.upload(params, async function (err, data) {
			if (err) {
				throw err;
			}
			console.log(`File uploaded successfully. ${data.Location}`);

			// Save the image to the database
		});
	});
};
