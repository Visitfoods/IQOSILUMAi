import { metadata } from './metadata';
import ClientLayout from './layout.client';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
