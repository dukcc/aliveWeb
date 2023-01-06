// These styles apply to every route in the application
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-black font-default overflow-x-hidden">
                <nav className="fixed bg-[#101010]/60 text-white backdrop-blur-sm w-full z-50 p-5 rounded-b-xl shadow-lg flex place-content-between align-middle">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            width={50}
                            height={50}
                            alt="Logo"
                        />
                    </Link>
                    <Link
                        href="/"
                        className="text-2xl pl-7 pt-2 font-default font-bold hover:text-cyan-500 transition-all duration-200"
                    >
                        Home
                    </Link>
                </nav>
                {children}
                <footer className="bg-[#0e0d0d] flex align-middle justify-items-center justify-center content-center">
                    <Link href="/">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="inline p-5 w-24"
                        />
                    </Link>
                    <Link href="https://www.duckyhq.com">
                        <img
                            src="/duckyhq.png"
                            alt="Logo"
                            className="inline p-5 w-24"
                        />
                    </Link>
                </footer>
            </body>
        </html>
    );
}
