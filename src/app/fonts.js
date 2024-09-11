import { Montserrat, Roboto, Abril_Fatface, Open_Sans} from 'next/font/google'


export const roboto = Roboto({
  weight: ['700'],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const abril = Abril_Fatface({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-abril",
  display: "swap",
})
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
export const open_sans = Open_Sans({
  weight: ['700'],
  subsets: ["latin"],
  variable: "--font-open_sans",
  display: "swap",
});