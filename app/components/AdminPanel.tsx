"use client";
import React, { useState } from "react";
import axios from "axios";
import { prisma } from "../db";

const AdminPanel = () => {
	const [selectedFiles, setSelectedFiles] = useState([]);

	const onFileChange = (event) => {
		setSelectedFiles(event.target.files);
	};

	const onFileUpload = async () => {
		const formData = new FormData();

		// Append each selected file to the formData object
		for (let i = 0; i < selectedFiles.length; i++) {
			formData.append("myFiles", selectedFiles[i], selectedFiles[i].name);
		}

		// Details of the uploaded files
		console.log(selectedFiles);

		// Request made to the backend api
		// Send formData object
		const result = await axios.post("api/uploadfiles", formData);
		{
			/*
		// After successful upload to S3, save file information to the database
		if (result.status === 200) {
			for (let i = 0; i < selectedFiles.length; i++) {
				const image = selectedFiles[i];
				await prisma.image.create({
					data: {
						name: image.name,
						imageUrl: `d2kukao61u3x53.cloudfront.net/image.galleryName${image.name}`,
						alt: "Image description",
						galleryName: image.galleryName,
						galleryId: "Gallery ID",
					},
				});
			}
		}*/
		}

		return result;
	};

	return (
		<div className='flex items-center justify-center m-auto p-4'>
			<input type='file' multiple onChange={onFileChange} />
			<input type='text' placeholder='Image Description' name='name' />
			<input type='text' placeholder='Gallery' name='galleryName' />
			<button
				onClick={onFileUpload}
				className='bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded'
			>
				Upload!
			</button>
		</div>
	);
};

export default AdminPanel;
