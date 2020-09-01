import React from "react"
import App from "../components/App"
import { Helmet } from "react-helmet"
import { headData } from "../mock/data"
import "../style/main.css"

export default function Home() {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charset="utf-8"/>
        <title>{title || 'Portfolio'}</title>
        <html lang={lang || 'en'}/>
        <meta name="description" content={description || 'Welcome'}/>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16"/>
      </Helmet>
      <App />
    </>
  )
}
