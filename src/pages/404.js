import React from "react"
import NotFound from "../components/pagenotfound"
import { Helmet } from "react-helmet"
import { headData } from "../mock/data"
import "../style/main.css"

export default function Home() {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charset="utf-8"/>
        <title>Page not found</title>
        <html lang={lang || 'en'}/>
        <meta name="description" content={description || 'Welcome'}/>
      </Helmet>
      <NotFound />
    </>
    )
}