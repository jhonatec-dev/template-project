import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// url deve ser do site pronto
export const metadata: Metadata = {
  title: "Título da minha página",
  description: "Descrição do meu site (bom para SEO)",
  keywords: ["nextjs", "typescript", "tailwindcss"],
  authors: [{ name: "Jhonatec", url: "https://github.com/jhonatec-dev" }],
  creator: "Jhonatec",
  metadataBase: new URL("https://www.jhonatec.com"),
  openGraph: {
    title: "Título da minha página quando compartilhada o link",
    description: "Descrição do meu site quando compartilhada o link",
    url: "https://www.jhonatec.com",
    siteName: "Jhonatec",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "https://www.jhonatec.com/assets/images/og.png",
        width: 1920,
        height: 1080,
      },
    ],
  },
};

// Não usar "useclient" no layout com metadata
// Criar um componente e usá-lo aqui no lugar
// Layout é como um ConextAPI onde passamos o children (conteúdo do aquivo page.tsx)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <>{children}</>
      </body>
    </html>
  );
}
