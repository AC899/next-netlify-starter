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
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
    body, html {
  height: 100%;
}

.bg {
  /* The image used */
  background-image: url("https://drive.google.com/uc?id=1Hi_mW_e5fZOBk47I2-C1k_M_uzWMeN_i");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
        </p>
      </main>

      <Footer />
    </div>
  )
}
