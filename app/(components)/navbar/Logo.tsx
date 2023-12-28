'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/images/logo.svg" 
      height={50}
      width="100" 
      alt="Airbnb Logo" 
    />
   );
}
 
export default Logo;