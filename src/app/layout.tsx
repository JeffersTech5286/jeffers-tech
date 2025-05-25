// app/layout.tsx
import type {ReactNode} from 'react'
import ClientStylesheetLoader from '@/components/clientStylesheetLoader.tsx';
import './globals.css'

const DEVILICON_CSS_HREF = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css";

export default function RootLayout({children,}: { children: ReactNode; }) {
  return (
      <html lang="pt-BR">
      <head>
          <noscript>
              <link
                  rel="stylesheet"
                  type="text/css"
                  href={DEVILICON_CSS_HREF}
              />
          </noscript>
          <title>Desenvolvedora de Software | Jeffers Tech</title>
      </head>
      <body>
      {children}
      <ClientStylesheetLoader href={DEVILICON_CSS_HREF} id="devicon-stylesheet"/>
      </body>
      </html>
  );
}
