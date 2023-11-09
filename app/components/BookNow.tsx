import Link from "next/link";

export default function BookNow() {
	return (
		<div className='flex w-full items-center justify-center px-2 py-2 md:gap-4 md:px-8 md:py-4'>
			<a
				className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
				href='https://www.honeybook.com/widget/aerys_media_254499/cf_id/645cfd9df30fa7002f5f0ba0'
				rel='noopener noreferrer'
				target='_blank'
			>
				BOOK YOUR SESSION
			</a>
			<a
				className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
				href='https://www.honeybook.com/widget/aerys_media_254499/cf_id/645cfd9df30fa7002f5f0ba0'
				rel='noopener noreferrer'
				target='_blank'
			>
				EMAIL US A QUESTION
			</a>
		</div>
	);
}
