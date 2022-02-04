import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

<a href="default.asp">
  <img src="https://drive.google.com/uc?id=1Hi_mW_e5fZOBk47I2-C1k_M_uzWMeN_i" alt="HTML tutorial" style="width:400px;height:400px;">
</a>
      </main>

      <Footer />
    </div>
  )
}
