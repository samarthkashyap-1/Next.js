
import "./globals.css";
export const metadata = {
  title: {
    default: 'Next.js + TypeScript Example',
    template: '%s | Next.js + TypeScript Example',
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-red-300 h-20 text-center">Header</header>
        {children}
        <footer className="bg-red-300 h-20 text-center">Footer</footer>
      </body>
    </html>
  );
}
