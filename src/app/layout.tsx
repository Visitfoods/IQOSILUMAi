import { metadata } from './metadata';
import ClientLayout from './layout.client';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="h-full overflow-hidden">
      <body className="h-full overflow-hidden">
        <main className="relative h-screen overflow-hidden">
          <ClientLayout>{children}</ClientLayout>
        </main>
      </body>
    </html>
  );
}
