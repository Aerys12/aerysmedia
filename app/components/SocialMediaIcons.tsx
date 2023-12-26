import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaPinterest,
} from "react-icons/fa";

const SocialMediaIcons = () => {
	return (
		<div className='flex w-1/2 m-auto p-4 items-center justify-between text-3xl text-center'>
			<a
				href='https://www.facebook.com/profile.php?id=100092481042901&mibextid=9R9pXO'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaFacebook />
			</a>
			<a
				href='https://www.instagram.com/aerysmedia'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaInstagram />
			</a>
			<a
				href='https://www.pinterest.com/aerysmedia'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaPinterest />
			</a>
			<a
				href='https://www.youtube.com/aerysmedia'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaYoutube />
			</a>
		</div>
	);
};

export default SocialMediaIcons;
