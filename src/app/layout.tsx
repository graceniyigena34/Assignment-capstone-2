import './globals.css';
import Header from '../components/header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Capstone Publishing Platform',
  description: 'A Medium-inspired publishing platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
