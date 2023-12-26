import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { SiGooglemaps } from "react-icons/si";

export default function GetInTouch() {
	return (
		<div className='mt-4 flex w-full flex-col items-center justify-center px-4 py-4 lg:flex-1 bg-slate-100'>
			<div className='flex w-full flex-col flex-1 mr-auto items-center justify-start lg:flex-1 gap-4 text-center'>
				<h1 className='text-xl'>GET IN TOUCH</h1>
				<div className='flex flex-1 w-full items-center justify-center gap-2 bg-white py-2 px-8'>
					<SiGooglemaps />
					<h1 className='text-xl'>862 Pape Ave</h1>
				</div>
				<div className='flex flex-1 w-full items-center justify-center gap-2 bg-white py-2 px-8'>
					<FaPhone /> <h1 className='text-xl'>647-544-3404</h1>
				</div>

				<div className='flex flex-1 w-full items-center justify-center gap-2 bg-white py-2 px-4'>
					<TbMailFilled /> <h1 className='text-xl'>aerysmedia6@gmail.com</h1>
				</div>
			</div>
		</div>
	);
}
