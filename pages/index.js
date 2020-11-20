import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

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
      <header>
        <nav>
          {/* <img src="../src/img/navbar-logo.png" alt="StartFlow" class="nav-logo"> */}
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Experience</a></li>
            <li><button href="#" id="contact-button">Contact</button></li>
          </ul>
        </nav>
      </header>
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
