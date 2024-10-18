import Image from 'next/image';
import rectangle1 from './img/6.png';
import rectangle2 from './img/7.png';
import  imageSrc from './img/9.png';
import imageSrc2 from './img/10.png';
import imageSrc3 from './img/11.png';
import imageSrc4 from './img/8.png';
import circle from './img/circle.png';
import magnifier from './img/magnigier.png';
import heart from './img/heart.png';
import community from './img/comunity.png';
export default function Features() {
    return (
        
        <div className="relative w-full flex flex-col items-center ">
            <div className=" items-center p-5">
                <h1 className="text-5xl font-extrabold font-handwritten  mb-4">
                    I am looking for
                </h1>
            </div>
            <div className="absolute" style={{ top: '150px', left: '100px' }}>
                <Image className = "object-cover"src={rectangle1} alt='puppy' width ={400} height={70}/>
            </div>
            <div className="absolute z-[-1]" style={{ top: '60px', left: '780px' }}>
                <Image className = "object-cover"src={imageSrc} alt='puppy' width ={200} height={70}/>
            </div>
            <div className="absolute" style={{ top: '450px', left: '100px' }}>
                <Image className = "object-cover"src={rectangle1} alt='puppy' width ={400} height={70}/>
            </div>
            <div className="absolute" style={{ top: '300px', left: '100px' }}>
                <Image className = "object-cover"src={rectangle2} alt='puppy' width ={400} height={70}/>
            </div>
            <div className="absolute" style={{ top: '250px', left: '1000px' }}>
                <Image className = "object-cover"src={imageSrc2} alt='puppy' width ={400} height={170}/>
            </div>

            <div className="absolute z-[-1]" style={{ top: '255px', left: '1150px' }}>
                <h1 className="text-2xl font-bold text-stone-600 mb-4">
                    Nothing we was <br />&nbsp; just snooping
                </h1>
            </div>

            <div className="absolute z-[-1]" style={{ top: '450px', left: '850px' }}>
                <Image className = "object-cover"src={imageSrc3} alt='puppy' width ={800} height={170}/>
            </div>

            <div className="absolute z-[-1]" style={{ top: '150px', left: '950px' }}>
                <Image className = "object-cover"src={imageSrc4} alt='puppy' width ={150} height={50}/>
            </div>

            <div className="absolute " style={{ top: '165px', left: '346px' }}>
                <Image className = "object-cover"src={circle} alt='puppy' width ={100} height={100}/>
            </div>
            <div className="absolute " style={{ top: '465px', left: '346px' }}>
                <Image className = "object-cover"src={circle} alt='puppy' width ={100} height={100}/>
            </div>
            <div className="absolute " style={{ top: '315px', left: '143px' }}>
                <Image className = "object-cover"src={circle} alt='puppy' width ={100} height={100}/>
            </div>

            <div className="absolute " style={{ top: '475px', left: '360px' }}>
                <Image className = "object-cover"src={community} alt='puppy' width ={60} height={50}/>
            </div>

            <div className="absolute " style={{ top: '175px', left: '360px' }}>
                <Image className = "object-cover"src={heart} alt='puppy' width ={60} height={50}/>
            </div>

            <div className="absolute " style={{ top: '325px', left: '165px' }}>
                <Image className = "object-cover"src={magnifier} alt='puppy' width ={60} height={50}/>
            </div>

    

        </div>

    );
    
}