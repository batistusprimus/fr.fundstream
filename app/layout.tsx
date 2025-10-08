import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fund-stream | Trouvez le financement adapté à votre entreprise",
  description: "Nous transmettons votre demande à des partenaires financiers qualifiés (banques, fintechs, courtiers). Gratuit, rapide, sans engagement.",
  keywords: ["financement entreprise", "prêt professionnel", "crédit entreprise", "financement PME"],
  openGraph: {
    title: "fund-stream | Trouvez le financement adapté à votre entreprise",
    description: "Nous transmettons votre demande à des partenaires financiers qualifiés. Gratuit, rapide, sans engagement.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
