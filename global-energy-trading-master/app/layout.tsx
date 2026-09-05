import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NATRES | Global Commodity Trading',
  description:
    'NATRES is an international commodity trading company headquartered in Qatar, with offices in London, Shanghai, and Johannesburg, trading Oil, Gas, LNG, LPG, and Coal.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
