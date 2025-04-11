import monzy from "../public/monzy-bye.png"
import Image from "next/image";
import linkedin from "../public/linkedin.png";
import github from "../public/git.png";
import twitter from "../public/twitter.png";

const Footer = () => {
  return (
    <>  
        <footer className="w-full flex flex-col">
            <div className="flex w-full pl-26 pr-26">
                <div className="flex flex-1.5">
                    <Image
                        src={monzy}
                        alt="monzy"
                        width={250}
                        height={250}
                    />
                </div>
                <div className="flex w-full flex-2 gap-6 justify-between pl-50">
                    <div className="flex flex-col items-center justify-center pb-9">
                        <h1 className="flex font-medium text-teal-500 pb-4 fade-title">Socials</h1>
                        <div className="flex items-center gap-4">
                            <Image 
                                src={linkedin}
                                alt="linkedin"
                                width={55}
                                height={55}
                                className="cursor-pointer fade-title"
                            />
                            <Image 
                                src={twitter}
                                alt="twitter"
                                width={55}
                                height={55}
                                className="cursor-pointer fade-title"
                            />
                            <Image 
                                src={github}
                                alt="github"
                                width={55}
                                height={55}
                                className="cursor-pointer fade-title"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className="flex font-medium text-teal-500 fade-title">Company</h1>
                        <h2 className="flex font-medium text-indigo-500 fade-title">82 Comendador Macedo St.</h2>
                        <h2 className="flex font-medium text-indigo-500 fade-title">Centro, Curitiba - PR 800600-030 - Brazil.</h2>
                        <h2 className="flex font-medium text-indigo-500 fade-title">CNPJ 35.568.645/0001-08.</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 pb-5">
                        <h1 className="flex font-medium text-teal-500 fade-title">Features</h1>
                        <h2 className="flex font-medium text-indigo-500 cursor-pointer fade-title">CSV Upload</h2>
                        <h2 className="flex font-medium text-indigo-500 cursor-pointer fade-title">Chrome Extension</h2>
                        <h2 className="flex font-medium text-indigo-500 cursor-pointer fade-title"></h2>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="flex font-medium text-teal-500">Links</h1>
                        <h2 className="flex font-medium text-indigo-500 cursor-pointer fade-title">About Us</h2>
                        <h2 className="flex font-medium text-indigo-500 cursor-pointer fade-title">Services</h2>
                        <h2 className="flex font-medium text-indigo-500 cursor-pointer fade-title">Talk with Owner</h2>
                    </div>
                </div>
            </div>
            <div className="flex w-full bg-indigo-500 h-16 items-center pl-26 pr-26 justify-between">
                <div className="flex items-center justify-start gap">
                    <h1 className="flex items-center text-white font-normal cursor-pointer fade-title">Copyright ©2025 Rafael Satyro. All Right Reserved</h1>
                </div>
                <div className="flex items-center justify-end gap-12">
                    <h1 className="flex items-center text-white font-normal cursor-pointer fade-title">Cookie Policy</h1>
                    <h1 className="flex items-center text-white font-normal cursor-pointer fade-title">Privacy Policy</h1>
                    <h1 className="flex items-center text-white font-normal cursor-pointer fade-title">Contact Us</h1>
                </div>
                
            </div>
        </footer>
    </>
  );
};

export default Footer;
