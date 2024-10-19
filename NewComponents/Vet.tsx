import imageSrc from '@/components/img/dog.png'
import imageSrc2 from '@/components/img/9.png'
import imageSrc3 from '@/components/img/11.png';
import Image from 'next/image';
export default function Vet() {
    return (<div >
            <div className="absolute z-1" style={{ top: '2100px', left: '570px' }}>
      
            <div className=" p-5">
                <h1 className="text-5xl font-extrabold font-handwritten  mb-4">
                    Need a vet ??
                </h1>
            </div>
            </div>
            <div className="absolute z-[-1]" style={{ top: '2170px', left: '700px' }}>
                <Image className = "object-cover"src={imageSrc2} alt='puppy' width ={200} height={70}/>
            </div>
            <div className="absolute z-[-1]" style={{ top: '2270px', left: '880px' }}>
                <Image className = "object-cover"src={imageSrc} alt='puppy' width ={500} height={270}/>
            </div>
            <div className="absolute z-[-1]" style={{ top:'2350px', left: '80px', width :'300px' }}>   
                <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Curious about your pet’s lifespan?
                    </h2>
                    <p className="text-gray-600 mb-3">
                        With just a few inputs, our AI scans for early signs of common and rare diseases.
                        Get timely recommendations for prevention and treatment to keep your furry friend safe and healthy.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Ensure your pet is getting the best nutrition. Based on your pet’s health status, breed, and activity
                        level, our AI crafts a tailor-made diet plan to optimize health and energy.
                    </p>
                    <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold ">
                        Consult Our AI Expert
                    </button>
                </div>
            </div>
            <div className="absolute z-[-1]" style={{ top: '2700px', left: '100px' }}>
            <button className="bg-custom-pink text-white font-bold py-2 px-4 rounded mt-2 w-[150px] ">
                        Consult Our AI Expert
                 </button>
            </div>

            <div className="absolute z-[-2]" style={{ top: '2600px', left: '800px' }}>
                <Image className = "object-cover"src={imageSrc3} alt='puppy' width ={700} height={470}/>
            </div>


    </div>

    );
}