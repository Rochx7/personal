import { Inter, League_Spartan, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrant",
});

const league_spartan = League_Spartan({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

const inter = Inter({ subsets: ["latin"] });

export { montserrat, league_spartan, inter };
