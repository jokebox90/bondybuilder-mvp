// @/pages/_app.tsx

import { Josefin_Sans, Josefin_Slab, Playball } from "next/font/google";
import Head from "next/head";
import { Fragment, MouseEventHandler, ReactNode } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import logoPNG from "@/static/img/logo.png";
import primaryPNG from "@/static/img/design-1.png";
import {
  CalendlyPopUp,
  CalendlyPopUpProvider,
} from "@/components/Calendly/Calendly";

const fontJosefinSans = Josefin_Sans({
  subsets: ["latin-ext"],
  variable: "--font-josefin-sans",
});
const fontJosefinSlab = Josefin_Slab({
  subsets: ["latin"],
  variable: "--font-josefin-slab",
});
const fontPlayball = Playball({
  weight: "400",
  subsets: [],
  variable: "--font-playball",
});

const mainClasses = [
  fontJosefinSlab.variable,
  fontJosefinSans.variable,
  fontPlayball.variable,
].join(" ");

interface MainComponentProps {
  children: ReactNode[] | ReactNode;
}

function MainComponent({ children }: MainComponentProps) {
  return (
    <main id="main" className={mainClasses}>
      {children}

      <CalendlyPopUp />
    </main>
  );
}

interface LayoutProps {
  children: ReactNode[] | ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <Head>
        <title>Bondy Builder, construisez votre propre vision de l&apos;intérieur</title>
        <meta
          name="description"
          content="Bondy Builder, vos experts en rénovation intérieure à Bondy. Spécialisés dans les installations électriques et de plomberie, transformations espaces de vie et l'aménagement avec élégance et confort. Services incluant peinture, pose de revêtements muraux et sols, la maçonnerie et la menuiserie. Faites nous confiance pour des solutions de décoration et de rénovation sur mesure, alliant qualité et attention du détail. Contactez-nous pour redéfinir votre espace avec style et fonctionnalité"
        />
        <meta
          name="keywords"
          content="rénovation intérieur à bondy, décoration d'inérieur à bondy, installation électrique, installation plomberie, espace de vie, environement et confort,peinturier, revêtements muraux et sols, maçonnerie, charpenterie"
        />
        <meta
          name="og:title"
          content="Bondy Builder, sublimez votre intérieur avec une touche
          d'artisanat unique"
        />
        <meta
          name="og:description"
          content="Bondy Builder, vos experts en rénovation intérieure à Bondy. Spécialisés dans les installations électriques et de plomberie, transformations espaces de vie et l'aménagement avec élégance et confort. Services incluant peinture, pose de revêtements muraux et sols, la maçonnerie et la menuiserie."
        />
        <meta name="og:image" content={logoPNG.src} />
        <link rel="icon" type="image/x-icon" href={primaryPNG.src} />
      </Head>

      <CalendlyPopUpProvider>
        <MainComponent>{children}</MainComponent>
      </CalendlyPopUpProvider>

      <GoogleTagManager gtmId="G-M5CQMKJ2SC" />
    </Fragment>
  );
}
