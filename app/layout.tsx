// These styles apply to every route in the application
import "./globals.css";
import Image from "next/image";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-[#0E1114] text-white">
                <nav className="w-full h-[77px] bg-black/50 backdrop-blur-xl flex place-content-between place-items-center align-middle px-[122px] max-[640px]:px-[61px]">
                    <Image src={"/logo.png"} alt={"Alive Logo"} width={"41"} height={"41"} />
                </nav>
                {children}
                <footer className="bg-[#131619] p-[122px] max-[640px]:p-[61px]">
                    <Image src={"/logo.png"} className="inline mr-[50px] mb-[50px]" alt={"Alive Logo"} width={"94"} height={"94"} />
                    <Image src={"/duckyhq.png"} className="inline mb-[50px]" alt={"Alive Logo"} width={"94"} height={"94"} />
                    <p className="text-[20px] font-light">
                        Alive - &copy; <a href="https://www.duckyhq.com" target="_blank" className="underline">DuckyHQ</a> 2023 <br />
                        Brand & Website created by <a href="https://www.duckyhq.com" target="_blank" className="underline">DuckyHQ</a>
                    </p>
                </footer>
            </body>
        </html>
    );
}
 