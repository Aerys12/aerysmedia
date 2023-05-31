"use client";
import Image from "next/image";
import aerys from "../../public/_MG_6363.jpg";
import React, { Component } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";

export default class SimpleSlider extends Component {
	render() {
		const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
			<button
				{...props}
				className={
					"slick-prev slick-arrow" +
					(currentSlide === 0 ? " slick-disabled" : "")
				}
				aria-hidden='true'
				aria-disabled={currentSlide === 0 ? true : false}
				type='button'
			>
				<MdArrowBackIos />
			</button>
		);
		const SlickArrowRight = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
			<button
				{...props}
				className={
					"slick-next slick-arrow" +
					(currentSlide === slideCount - 1 ? " slick-disabled" : "")
				}
				aria-hidden='true'
				aria-disabled={currentSlide === slideCount - 1 ? true : false}
				type='button'
			>
				<MdArrowForwardIos />
			</button>
		);

		const settings = {
			dots: true,
			fade: true,
			infinite: true,
			speed: 500,
			autoplay: true,
			autoplaySpeed: 4000,
			pauseOnHover: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: <SlickArrowLeft />,
			nextArrow: <SlickArrowRight />,
		};
		return (
			<div className='w-full p-4 md:mx-auto md:w-full md:max-w-6xl'>
				<Slider className='flex flex-col p-4 text-black' {...settings}>
					<div className='w-full'>
						<div className='flex w-full flex-col items-center justify-center p-2'>
							<Image
								className='mb-4 rounded-full object-cover'
								alt='image slider'
								src={aerys}
								width={96}
								height={96}
							/>
							<p className='mb-4 w-4/5 text-center text-xl'>
								I had the pleasure of working with Emmanuel and the experience
								was incredible. Not only was his photography skills outstanding,
								but he also made the entire process easy and enjoyable. I
								couldn't be happier with the final product
							</p>
							<h3 className='mb-4'>
								<FaQuoteLeft />
							</h3>
							<h2 className='text-2xl text-center font-semibold'>
								Emmanuel Nsubuga
							</h2>
							<h2 className='text-2xl text-center font-semibold'>
								Transporter, Mount Sinai Hospital
							</h2>
						</div>
					</div>
					<div>
						<div className='flex w-full flex-col items-center justify-center'>
							<Image
								className='mb-4 rounded-full object-cover'
								alt='image slider'
								src={aerys}
								width={96}
								height={96}
							/>
							<p className='mb-4 w-4/5 text-center text-xl'>
								Working with Emmanuel was an absolute joy. They were
								professional, patient, and took the time to understand my
								vision. The end result was a set of stunning photos that
								exceeded my expectations
							</p>
							<h3 className='mb-4'>
								<FaQuoteLeft />
							</h3>
							<h2 className='text-2xl text-center font-semibold'>Lara Croft</h2>
							<h2 className='text-2xl text-center font-semibold'>
								Physician, Mount Sinai Hospital
							</h2>
						</div>
					</div>
					<div>
						<div className='flex w-full flex-col items-center justify-center'>
							<Image
								className='mb-4 rounded-full object-cover'
								alt='image slider'
								src={aerys}
								width={96}
								height={96}
							/>
							<p className='mb-4 w-4/5 text-center text-xl'>
								I was blown away by Emmanuels's ability to capture the emotion
								and essence of our special day. Their attention to detail and
								creativity truly made our wedding photos unforgettable
							</p>
							<h3 className='mb-4'>
								<FaQuoteLeft />
							</h3>
							<h2 className='text-2xl text-center font-semibold'>Salman Ali</h2>
							<h2 className='text-2xl text-center font-semibold'>
								Ortho Tech, Mount Sinai Hospital
							</h2>
						</div>
					</div>
					<div>
						<div className='flex w-full flex-col items-center justify-center'>
							<Image
								className='mb-4 rounded-full object-cover'
								alt='image slider'
								src={aerys}
								width={96}
								height={96}
							/>
							<p className='mb-4 w-4/5 text-center text-xl'>
								I highly recommend Emmanuel for any photography needs. His
								talent and passion for his craft is evident in every photo he
								takes. I couldn't be happier with the results
							</p>
							<h3 className='mb-4'>
								<FaQuoteLeft />
							</h3>
							<h2 className='text-2xl text-center font-semibold'>Rona Roze</h2>
							<h2 className='text-2xl text-center font-semibold'>Actor</h2>
						</div>
					</div>
					<div>
						<div className='flex w-full flex-col items-center justify-center'>
							<Image
								className='mb-4 rounded-full object-cover'
								alt='image slider'
								src={aerys}
								width={96}
								height={96}
							/>
							<p className='mb-4 w-4/5 text-center text-xl'>
								I am beyond impressed with Emmanuel's work. Their ability to
								capture the beauty and uniqueness of every moment is truly
								remarkable. I can't wait to work with them again
							</p>
							<h3 className='mb-4'>
								<FaQuoteLeft />
							</h3>
							<h2 className='text-2xl text-center font-semibold'>Sharaf</h2>
							<h2 className='text-2xl text-center font-semibold'>
								Software Developer
							</h2>
						</div>
					</div>
					<div>
						<div className='flex w-full flex-col items-center justify-center'>
							<Image
								className='mb-4 rounded-full object-cover'
								alt='image slider'
								src={aerys}
								width={96}
								height={96}
							/>
							<p className='mb-4 w-4/5 text-center text-xl'>
								I had the pleasure of working with Emmanuel for a professional
								headshot session and was blown away by the results. They have a
								natural ability to put clients at ease and bring out their best
								features in every shot.
							</p>
							<h3 className='mb-4'>
								<FaQuoteLeft />
							</h3>
							<h2 className='text-2xl text-center font-semibold'>Jamal Khan</h2>
							<h2 className='text-2xl text-center font-semibold'>
								Software Developer
							</h2>
						</div>
					</div>
				</Slider>
			</div>
		);
	}
}
