import Navbar from "./component/Navbar";
import "./globals.css";
import { Amatic_SC } from 'next/font/google';

const amaticSC = Amatic_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-amatic-sc', // Lowercase hyphenated
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${amaticSC.variable}`}
        style={{
          fontFamily: 'var(--font-amatic-sc)', // Matches variable name
          fontWeight: 500, // Explicitly set weight (400 or 700)
          letterSpacing: '0.02em',
          fontSize: '25px',
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}