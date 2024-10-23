import { useState } from 'react'
import product1 from '../assets/produto1.jpeg'
import product2 from '../assets/produto2.jpg'
import product3 from '../assets/produto3.webp'
import product4 from '../assets/produto4.webp'
import product5 from '../assets/produto5.jpg'
import product6 from '../assets/produto6.jpg'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const slides = [product1, product2, product3, product4, product5, product6]

export default function Slide() {
    const [contNow, setContNow] = useState(0)

    const prev = () => setContNow(contNow == 0 ? 5 : contNow - 1)
    const next = () => setContNow(contNow > 4 ? 0 : contNow + 1)

    return (
        <div>
            <div className="max-w-lg">
                <div className="overflow-hidden relative">
                    <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${contNow * 100}%)` }}>
                        {slides.map((slide, index) => (
                            <img key={index} src={slide} alt={`Imagem ${index}`} />
                        ))}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                        <button className='text-3xl font-black pb-1 px-2 p-1 rounded-full shadow bg-white/80 text-indigo-800 hover:bg-white' onClick={prev}><IoIosArrowDropleftCircle /> </button>
                        <button className='text-3xl font-black pb-1 px-2  p-1 rounded-full shadow bg-white/80 text-indigo-800 hover:bg-white' onClick={next}> <IoIosArrowDroprightCircle /> </button>
                    </div>
                    <div className='absolute bottom-4 right-0 left-0 '>
                        <div className='flex items-center gap-2 justify-center '>
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    onClick={() => setContNow(index)}
                                    className={`cursor-pointer w-3 h-3 rounded-full bg-indigo-800 transition-all ${contNow === index ? 'p-2' : 'bg-opacity-50'}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}