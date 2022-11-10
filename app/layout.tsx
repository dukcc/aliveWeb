// These styles apply to every route in the application
import Image from 'next/image';
import './globals.css';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="fixed bg-black/60 text-white backdrop-blur-md z-50 w-[98vw] p-5 m-3 rounded-xl shadow-lg flex content-between align-middle">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Logo"
          />
        </nav>
        {children}
      </body>
    </html>
  );
}
