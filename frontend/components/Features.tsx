import Image from "next/image";
import monzy from "../public/monzy-csv.png";
import monzy2 from "../public/monzy-extension.png";
import monzy3 from "../public/monzy-dashboard.png";

const Features = () => {
  return (
    <section id="services">
        <div className="flex flex-col w-full pr-26 pl-26 pt-6 pb-8 justify-center items-center">
            <h1 className="flex font-medium text-teal-500 text-3xl pb-16 fade-title">Choose which Monzy service suits you best</h1>
            <div className="flex w-full justify-center gap-18">
                <div className="flex flex-col justify-center items-center border-2 border-indigo-500 rounded w-1/5">
                    <Image
                        src={monzy}
                        alt="monzy-csv"
                        width={100}
                        height={100}
                        className="flex mt-6"
                    />
                    <h1 className="flex text-normal font-normal text-2xl text-teal-500 pt-6 fade-title">CSV Converter</h1>
                    <p className="flex text-center pl-6 pr-6 pt-6 pb-14 text-indigo-500 fade-title">Insert a csv file with monetary values, name and expiration date, and see that we will convert the values ​​entered into several world currencies with updated quotes.</p> 
                    <button className="flex mb-12 p-3 bg-indigo-500 text-white rounded cursor-pointer">Convert Now</button>
                </div>
                <div className="flex flex-col justify-center items-center border-2 border-indigo-500 rounded w-1/5">
                    <Image
                        src={monzy2}
                        alt="monzy-extension"
                        width={100}
                        height={100}
                        className="flex mt-6"
                    />
                    <h1 className="flex text-normal font-normal text-2xl text-teal-500 pt-6 fade-title">Chrome Extension</h1>
                    <p className="flex text-center pl-6 pr-6 pt-6 pb-14 text-indigo-500 fade-title">The Monzy extension identifies when you are using or processing monetary values, and you just need to press a command to display conversions of that value in current world rates.</p> 
                    <button className="flex mb-12 p-3 bg-indigo-500 text-white rounded cursor-pointer">Install Now</button>
                </div>
                <div className="flex flex-col justify-center items-center border-2 border-indigo-500 rounded w-1/5">
                    <Image
                        src={monzy3}
                        alt="monzy-dashboard"
                        width={100}
                        height={100}
                        className="flex mt-6"
                    />
                    <h1 className="flex text-normal font-normal text-2xl text-teal-500 pt-6 fade-title">Dashboard</h1>
                    <p className="flex text-center pl-6 pr-6 pt-6 pb-14 text-indigo-500 fade-title">With our smart dashboard, you can track conversion history, navigate between converted data, track monetary evolution or even export or forward converted files.</p> 
                    <button className="flex mb-12 p-3 bg-indigo-500 text-white rounded cursor-pointer">Register Now</button>
                </div>
            </div>
        </div>
    </section>    
  );
};

export default Features;
