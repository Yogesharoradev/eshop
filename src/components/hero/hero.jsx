import React from 'react'
import Slider from 'react-slick'
const Hero = () => {

    const HeroSlide = [
        {
            id:1,
            img: './images/headphone.png',
            subtitle: "Beats Solo",
            Title: "Wireless",
            Title2:  'Headphones',
            
        },
        {
            id:2,
            img: './images/macbook.png',
            subtitle: "Beats Solo",
            Title: "Branded",
            Title2:  'Laptops',
                    },
        {
            id:3,
            img:'./images/vr.png',
            subtitle: "Beats Solo",
            Title: "Wireless",
            Title2:  'Virtual',
            
        },
    ]

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlaySpeed:4000,
        pauseOnHover:false , 
        pauseOnFocus:true,
      };

  return (
    <div className='flex justify-center items-center bg-gray-950 min-h-[600px] text-white'>
        <div className='h-[500px] w-[1300px] rounded-2xl  hero-bg-color'>
        <Slider {...settings}>
                {
                    HeroSlide.map((data)=>( 
                        <div key={data.id} > 
                        <div className='grid grid-cols-2'>
                           <div className='flex flex-col gap-4 justify-center p-6'>
                            <h1 className='font-semibold text-2xl'>{data.subtitle}</h1>
                            <h1 className='font-semibold text-7xl'>{data.Title}</h1>
                            <h1 className='font-semibold text-9xl opacity-5'>{data.Title2}</h1>
                            <div className='mt-6'>
                                <button className='border rounded-lg bg-rose-800
                                 hover:bg-rose-500 py-2 px-8 font-semibold '> Shop Now</button>
                            </div>
                            </div>
                            <div >
                                <img src={data.img} alt='brand' className='w-[400px] h-[400px] mx-auto'></img>
                            </div>
                            </div>
                        </div>
                        ))
                
                }
     
        </Slider>
        </div>
      </div>
  )
}

export default Hero;