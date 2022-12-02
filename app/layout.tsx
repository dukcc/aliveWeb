// These styles apply to every route in the application
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <nav className="fixed bg-black/60 text-white backdrop-blur-md w-[98vw] z-50 p-5 m-3 rounded-xl shadow-lg flex place-content-between align-middle">
          <Link href="/">
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="Logo"
            />
          </Link>
          <Link href="/" className="text-2xl pl-7 pt-2 font-default font-bold hover:text-blue-500 transition-all duration-200">Home</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
