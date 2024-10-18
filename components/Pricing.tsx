import Image from 'next/image';
import background from './img/bg3.png';
import line from './img/9.png';
import cutie from './img/cutie.png';
import gradient from './img/11.png';
import laptop from './img/laptop.png';
export default function Pricing () {
    return (
        <div className="mt-10" >
        <div className="absolute w-full flex flex-col items-center" style={{ top: '1300px'  }}> 

        <div className="absolute " style={{ top: '60px', left: '150px' }}>
                    <h1 className="text-5xl font-extrabold font-handwritten  mb-4">
                        FurryBudy Friends: Where Pet Owners Meet
                    </h1>
                </div>
                <div className="absolute z-[-5]" style={{ top: '30px', left: '50px' }}>
                    <Image className = "object-cover "src={background} alt='puppy' width ={800} height={800}/>
                </div>
                <div className="absolute z-[-1]" style={{ top: '110px', left: '700px' }}>
                    <Image className = "object-cover "src={line} alt='puppy' width ={400} height={100}/>
                </div>

                <div className="absolute" style={{ top: '300px', left: '400px' }}>
                    <h1 className="text-2xl font-bold font-handwritten text-white mb-4">
                    I Wanna  see what are<br/>&nbsp; they talking about behind<br/>&nbsp;&nbsp;&nbsp;&nbsp; my back
                    </h1>
                </div>
                <div className="absolute z-[-2]" style={{ top: '500px', left: ' 0px' }}>
                    <Image className = "object-cover "src={gradient} alt='puppy' width ={1800} height={100}/>
                </div>
                <div className="absolute z-[-1]" style={{ top: '200px', left: '30px' }}>
                    <Image className = "object-cover "src={cutie} alt='puppy' width ={500} height={100}/>
                </div>
                <div className="absolute z-[-1]" style={{ top: '200px', left: '700px' }}>
                    <Image className = "object-cover "src={laptop} alt='puppy' width ={1000} height={1000}/>
                </div>

            </div>
    </div>
    );
}