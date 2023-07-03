"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { carsDataInterface } from ".";
import CustomButton from "./CustomButton";
import { calculateRent } from "./Request";
import heroImg from '../public/hero.png'
import CarDetails from "./CarDetails";
import Modal from 'react-modal';
import { getCarImages } from "./Request";
interface CarCardProps {
  car: carsDataInterface;
}
interface roughProp {
  full : string
  raw : string
  regular: string
  small: string
  small_s3 : string
  thumb: string
  
}
// Modal.setAppElement(document.body);
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const carRent = calculateRent(city_mpg, year);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [images, setCarImages] = useState <Array<object>>();
  useEffect(() => {
    getCarImages("Toyota").then(res => setCarImages( res.results));
  }, [])
  // console.log(images)
  return (
    <>
      <div className="car-card group">
        <div className="car-card__content">
          <h2 className="car-card__content-title">
            {make} {model}
          </h2>
        </div>

        <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
          <span className='self-start text-[14px] leading-[17px] font-semibold'>  Rs : {carRent}</span>

          <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
        </p>

        <div className='relative w-full h-40 my-3 object-contain justify-between'>
          <Image
            src={heroImg}
            alt="car_image"
            height={160}
          />
        </div>

        <div className='relative flex w-full mt-2'>
          <div className='flex group-hover:invisible w-full justify-between text-grey'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
              <p className='text-[14px] leading-[17px]'>
                {transmission === "a" ? "Automatic" : "Manual"}
              </p>
            </div>
            <div className="car-card__icon">
              <Image src="/tire.svg" width={20} height={20} alt="seat" />
              <p className="car-card__icon-text">{drive.toUpperCase()}</p>
            </div>
            <div className="car-card__icon">
              <Image src="/gas.svg" width={20} height={20} alt="seat" />
              <p className="car-card__icon-text">{city_mpg} MPG</p>
            </div>
          </div>
          <div className="car-card__btn-container">
            <button className="w-full border-none outline-none rounded-[30px] bg-blue-700 text-white p-2" onClick={openModal}>
              Click Here
            </button>
          </div>
        </div>


      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className=' w-[80%] md:w-1/4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 h-[100vh] overscroll-contain overflow-y-scroll scrollba'
      >
        <CarDetails details={car} />
      </Modal>
    </>
  );
};

export default CarCard;