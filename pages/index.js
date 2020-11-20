import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
      </Head>

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
        <p>I'm a web developer focusing on front‑end technologies <br/> I aspire to always create clean & user‑friendly experiences,<br/> I am passionate about building excellent software<br/> that improves the lives of those around me.</p>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )

}
