import Image from "next/image";
import monzy from "../public/monzy-pc.png"

export default function HomePage() {
  return (
    <div className="flex w-full justify-center flex-col items-center pr-26 pl-26 pb-8">
      <div className="pt-18 w-full flex flex-col items-center justify-center pb-2">
        <h1 className="flex text-teal-500 text-4xl font-medium pb-4">Monzy converts more than Money</h1>
        <h1 className="flex text-indigo-500 text-4xl font-medium pb-8">he saves your time.</h1>
        <h4 className="flex text-indigo-500 text-2xl font-medium">Convert spreadsheets and monetary values in an easy and simplified way.</h4>
      </div>
      <div className="flex w-full items-center">
          <div className="flex flex-col w-full items-center justify-start">
                <h1 className="flex text-teal-500 text-2xl font-medium pb-8">With the CSV converter and the chrome extension, you can convert values with real-time quotes, making it much easier and more pratical, regardless of your market or activity.</h1>
                <h2 className="flex text-teal-500 text-2xl font-normal pb-10">Convert now, discover the benefits of our services and let Monzy save for your and your company.</h2>
                <div className="flex w-full justify-start">
                    <button className="flex p-4 bg-indigo-500 justify-center items-center text-white font-medium rounded cursor-pointer">Get Started</button>
                </div>
          </div>
          <div className="flex flex-col w-full items-center justify-center">
              <Image
                src={monzy}
                alt="monzy-pc-dashboard"
                width={550}
                height={550}
                className="flex justify-center ml-50"
              />
          </div>
      </div>
    </div>
  );
}
