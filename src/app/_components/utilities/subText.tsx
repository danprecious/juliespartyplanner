import React from "react"
import { Courier_Prime, Coda } from "next/font/google";
import localFont from "next/font/local";

export const myFont = localFont({
  src: "../../../../public/fonts/GeistMono-VariableFont_wght.ttf",
  variable: "--font-myFont",
});


export const codeText = Courier_Prime({
  variable: "--",
  weight: ["400", "700"]
});

export const codeText2 = Coda({
  variable: "--font-coda-mono",
  weight: ["400", "800"]
});

const SubText: React.FC<{styles: string, text: string}> = ({styles, text}) => {
  return (
    <p className={`${styles}  ${myFont.variable}`}>{text}</p>
  )
}

export default SubText
