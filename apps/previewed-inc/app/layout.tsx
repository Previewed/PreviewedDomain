import './global.css';
import { StyledComponentsRegistry } from './registry';
import './styles.css';
require('./aos.js');

export const metadata = {
  title: 'Previewed Inc',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}