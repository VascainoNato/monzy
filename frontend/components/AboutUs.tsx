import Image from "next/image";
import monzy from "../public/monzy-about.png"

const AboutUs = () => {
  return (
    <div className='flex w-full pr-26 pl-26 pb-12 justify-around gap-50'>
        <div className="flex items-center">
            <Image
                src={monzy}
                alt="monzy-about-us"
                height={500}
                width={500}
                className="flex justify-center"
            />
        </div>
        <div className="flex flex-col items-center">
            <h1 className="flex text-3xl font-medium text-teal-500 pt-20 justify-center items-center pb-6 w-full">More than just a document converter</h1>
            <h1 className="flex text-2xl font-medium text-indigo-500 w-full justify-center">A tireless employee for your team.</h1>
        </div>
    </div>
  );
};

export default AboutUs;
