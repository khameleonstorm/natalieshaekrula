import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { inter } from "./index";
import ContactForm from "@/components/ContactForm";



export default function service() {
  return (
    <>
      <Head>
        <link rel="icon" href="logo192.png" /> 
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="%PUBLIC_URL%/"/>
        <meta property="og:title" content="Natalie Shae Krula Portfolio"/>
        <meta property="og:description" content="As a specialist in investment portfolios, Natalie Shae Krula (CRD#6922246) employs consistent and intelligent trading strategies to help build your investments. Learn more about her expertise in trading strategies for building wealth."/>
        <meta property="og:image" content="https://bit.ly/3sz2dcI"/>
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Natalie Shae Krula Portfolio" />


        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://bit.ly/3sz2dcI"/>
        <meta property="twitter:title" content="Natalie Shae Krula Portfolio"/>
        <meta property="twitter:description" content="As a specialist in investment portfolios, Natalie Shae Krula (CRD#6922246) employs consistent and intelligent trading strategies to help build your investments. Learn more about her expertise in trading strategies for building wealth."/>
        <meta property="twitter:image" content="https://bit.ly/3sz2dcI"/>
        <meta name="google-site-verification" content="HRt_d3x3x6Sc-gD5FrNiFrX0-FciH5jG6wA2g6tV9sA" />
        <meta name="description" content="As a specialist in investment portfolios, Natalie Shae Krula (CRD#6922246) employs consistent and intelligent trading strategies to help build your investments. Learn more about her expertise in trading strategies for building wealth." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow"/>

        <title>Natalie Shae Krula Portfolio | Contact Me</title>
      </Head>

    <main className={`${styles.main} ${inter.className}`}>
    <Nav />
    <ContactForm />
    <Footer />
    </main>
    </>
  )
}
