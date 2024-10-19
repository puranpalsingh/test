
import imageSrc2 from '@/components/img/9.png'
import imageSrc3 from '@/components/img/bg4.png';
import Image from 'next/image';
export default function Ending() {
    return (
        <div >
        <div className="absolute z-1" style={{ top: '2850px', left: '570px' }}>
                <h1 className="text-5xl font-extrabold font-handwritten  mb-4">
                    Why Furrybudy
                </h1>
        </div>
            <div className="absolute z-[-1]" style={{ top: '2900px', left: '780px' }}>
                <Image className = "object-cover"src={imageSrc2} alt='puppy' width ={200} height={70}/>
            </div>
            <div className="absolute z-[-2]" style={{ top: '2800px', left: '320px' }}>
                <Image className = "object-cover"src={imageSrc3} alt='puppy' width ={1200} height={200}/>
            </div>
            <div className="absolute z-1" style={{ top: '3000px', left: '1020px' }}>
                <div className="p-8 rounded-lg shadow-md max-w-1xl w-[100px]">
                    <h2 className="text-2xl font-extrabold text-white mb-4">
                        Why Choose FurryBuddy <br/>for Your Pet&apos;s Health?
                    </h2>
                    <p className="text-white text-sm">
                        At Furry Buddy, we combine cutting-edge AI technology<br/> with expert veterinary insights to bring you a reliable, <br/>
                        real-time health prediction system for your pets. Get actionable recommendations based on your pet&apos;s unique <br/>
                        profile and ensure their long-term health and happiness.
                    </p>
                </div>
            </div>
            


        </div>
    )
}