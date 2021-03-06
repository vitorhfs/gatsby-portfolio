import React from "react"
import NotFound from "../components/pagenotfound/NotFound"
import { Helmet } from "react-helmet"
import { headData } from "../mock/data"
import "../style/main.css"

export default function Home() {
  const { lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charset="utf-8"/>
        <title>Page not found</title>
        <html lang={lang || 'en'}/>
        <meta name="description" content={description || 'Welcome'}/>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
      <NotFound />
    </>
    )
}