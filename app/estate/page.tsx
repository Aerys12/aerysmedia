import Link from "next/link";

export default async function Estate() {
	return (
		<div className='mx-auto flex w-full flex-col items-center justify-center lg:max-w-7xl'>
			<div className='flex flex-col items-center justify-center px-2 pb-4 md:px-8'>
				<h1 className='p-4 text-4xl'>Portrait Photography</h1>
				<p className='text-center'>
					Welcome to my portrait photography page! I specialize in capturing the
					unique essence of each person I photograph, creating images that truly
					reflect their personality and style. Let's work together to tell your
					story through my lens.
				</p>
				<div className='flex w-full items-center justify-center px-2 py-2 md:gap-4 md:px-8 md:py-4'>
					<Link
						className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
						href='/'
					>
						BOOK YOUR PORTRAIT SESSION
					</Link>
					<Link
						className='flex flex-1 items-center justify-center text-center underline underline-offset-8'
						href='/'
					>
						EMAIL US A QUESTION
					</Link>
				</div>
			</div>
		</div>
	);
}
