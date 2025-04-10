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
                        <h1 className="flex font-medium text-teal-500 pb-4">Socials</h1>
                        <div className="flex items-center gap-4">
                            <Image 
                                src={linkedin}
                                alt="linkedin"
                                width={55}
                                height={55}
                                className="cursor-pointer"
                            />
                            <Image 
                                src={twitter}
                                alt="twitter"
                                width={55}
                                height={55}
                                className="cursor-pointer"
                            />
                            <Image 
                                src={github}
                                alt="github"
                                width={55}
                                height={55}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className="flex font-medium text-teal-500">Company</h1>
                        <h2 className="flex font-medium text-indigo-500">82 Comendador Macedo St.</h2>
                        <h2 className="flex font-medium text-indigo-500">Centro, Curitiba - PR 800600-030</h2>
                        <h2 className="flex font-medium text-indigo-500 justify-start w-full">Brazil.</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="flex font-medium text-teal-500">Features</h1>
                        <h2 className="flex font-medium text-indigo-500 cursor-pointer">CSV Upload</h2>
                        <h2 className="flex font-medium text-indigo-500 cursor-pointer">Extension</h2>
                        <h2 className="flex font-medium text-indigo-500 cursor-pointer">Dashboard</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="flex font-medium text-teal-500">Pages</h1>
                        <h2 className="flex font-medium text-indigo-500 cursor-pointer">About Us</h2>
                        <h2 className="flex font-medium text-indigo-500 cursor-pointer">Features</h2>
                        <h2 className="flex font-medium text-indigo-500 cursor-pointer">Pricing</h2>
                    </div>
                </div>
            </div>
            <div className="flex w-full bg-indigo-500 h-16 items-center pl-26 pr-26 justify-between">
                <div className="flex items-center justify-start gap">
                    <h1 className="flex items-center text-white font-normal cursor-pointer">Copyright ©2025 Rafael Satyro. All Right Reserved</h1>
                </div>
                <div className="flex items-center justify-end gap-12">
                    <h1 className="flex items-center text-white font-normal cursor-pointer">Cookie Policy</h1>
                    <h1 className="flex items-center text-white font-normal cursor-pointer">Privacy Policy</h1>
                    <h1 className="flex items-center text-white font-normal cursor-pointer">Contact Us</h1>
                </div>
                
            </div>
        </footer>

        
        
    
    </>
  );
};

export default Footer;
