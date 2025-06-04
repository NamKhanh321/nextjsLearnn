import '@/app/ui/global.css';
import inter from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ `${inter.className} antialiased`}>
        <main className="flex-1">{children}</main>
        <footer>Contact us: ABC@gmail.com</footer>
      </body>
      
    </html>
  );
}
