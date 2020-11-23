import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Navbar from '../components/Navbar/NavBar'

export default function Home() {

  return (
    <div className='container'>
      <Head>
        <title>Dimitris Syrros|Frontend-Developer</title>
      </Head>
      <Image
        className='urban-background'
        src="/../public/assets/landingPage.jpg"
        alt="Urban Landscape"
        layout='fill'
        quality='75'
        loading='eager'
        priority='true'
      />
      <Navbar/>
      <main className='main'>
        <div className='greeting-container'>
          <h2 className='greeting'>
            Hi there,
        </h2>
        </div>
        <div className='introduction'>
          <p>I'm</p>
          <p className='yellow'>Dimitris Syrros</p>
        </div>
        <p>I'm a web developer focusing on front‑end technologies <br /> I aspire to always create clean & user‑friendly experiences,<br /> I am passionate about building excellent software<br /> that improves the lives of those around me.</p>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )

}
