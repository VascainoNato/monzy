import Image from "next/image";
import monzy from "../public/monzy-about.png"

const AboutUs = () => {
  return (
    <div className='flex w-full pr-26 pl-26 pb-12  gap-50'>
        <div className="flex items-center">
            <Image
                src={monzy}
                alt="monzy-about-us"
                height={550}
                width={550}
                className="flex justify-center"
            />
        </div>
        <div className="flex flex-col items-center w-1/2 gap-6 justify-center">
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="flex text-3xl font-medium text-indigo-500 justify-center items-center w-full">More than just a document Converter</h1>
            <h1 className="flex text-2xl font-medium text-indigo-500 w-full justify-center">A tireless employee for your team.</h1>
          </div>
          <p className="flex text-2xl font-normal text-teal-500 items-center justify-center text-center">Monzy is a CSV file converter, where you can now transform these currency files into converted results with the current rate of the selected currency.</p>
          <p className="flex text-2xl font-normal text-teal-500 items-center justify-center text-center pb-3">Developed by with unique objectives, to improve your day-to-day financial sector, payments or purchases, or also, to facilitate sending and monetary conversions during your daily use, regardless of the occasion.</p>
          <button className="p-3 bg-indigo-500 font-medium text-white rounded cursor-pointer">Discover Now</button>
        </div>
    </div>
  );
};

export default AboutUs;
