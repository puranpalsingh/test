import Image from 'next/image';
import imageSrc from './img/1.png';
import imageSrc2 from './img/2.png';
import imageSrc3 from './img/3.png';
import imageSrc4 from './img/4.png';
import imageSrc5 from './img/5.png';
import tick from './img/tick.png'


export default function Landing() {
    return (
        <div className="realtive bg-sky-200 w-full h-[600px] flex flex-col items-center clip-shape">
        <div className=" items-center p-5">
            <h1 className="text-5xl font-extrabold font-handwritten mb-4">
            &quot;Your Pet&apos;s Health,<br /> Smarter with AI&quot;
            </h1>
        </div>
        <div className="flex-grow flex items-center justify-center">
                <button className="bg-custom-pink p-2 rounded-md h-[50px] w-[200px]">
                    Get Started Today
                </button>
        </div>
        
        <div className="absolute" style={{ top: '280px', left: '160px' }}>
            <Image className = "object-cover"src={imageSrc} alt='puppy' width ={170} height={120}/>
        </div>
        <div className="absolute" style={{ top: '450px', left: '900px' }}>
            <Image className = "object-cover"src={imageSrc3} alt='puppy' width ={150} height={100}/>
        </div>
        <div className="absolute" style={{ top: '250px', left: '1200px' }}>
            <Image className = "object-cover"src={imageSrc5} alt='puppy' width ={150} height={100}/>
        </div>
        <div className="absolute" style={{ top: '180px', left: '390px' }}>
            <Image className = "object-cover"src={imageSrc2} alt='puppy' width ={120} height={95}/>
        </div>
        <div className="absolute" style={{ top: '125px', left: '1100px' }}>
            <Image className = "object-cover"src={imageSrc4} alt='puppy' width ={60} height={60}/>
        </div>
        <div className="absolute" style={{ top: '260px', left: '900px' }}>
            <h1 className="text-sm font-bold font-handwritten  mb-4">
                Track, Diagnose and Connect -<br />&nbsp;&nbsp;&nbsp; All in One Place&quot;
            </h1>
        </div>
        <div className="absolute" style={{ top: '200px', left: '800px' }}>
            <Image className = "object-cover"src={tick} alt='puppy' width ={70} height={70}/>
        </div>
        
        
        </div>
    );
}
