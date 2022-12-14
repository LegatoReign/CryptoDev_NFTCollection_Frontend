import Head from 'next/head'
import Header from '../components/Header'
import MintNFT from '../components/MintNFT'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Collection</title>
        <meta name="description" content="NFT Collection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MintNFT />
      <Footer />
    </div>
  )
}
