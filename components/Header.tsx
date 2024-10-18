import Image from 'next/image';
import imageSrc from './img/logo.png';
import Link from 'next/link';


export default function Header () {
    return (
        
    <div className = "bg-sky-200 border-b-[2px] border-black  flex items-center w-full"> 
    <div className = 'flex-grow p-2'>
        <Image 
                src= {imageSrc} 
                alt="Description of the image" 
                width={50} 
                height={50} 
            />
           </div>
        <nav className='flex space-x-8 jsutify-center flex-grow'>
        <Link href= '/landing'>Home</Link>
        <Link href= '/featuers'>Features</Link>
        <Link href= '/Pricing'>Pricing</Link>
        <Link href= '/Vet_Directory'>Vet  Directory</Link>
        </nav>

    </div>
    );
} 