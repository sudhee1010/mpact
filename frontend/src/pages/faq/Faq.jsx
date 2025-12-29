import React from 'react'
import styles from "./Faq.module.css"
import Navbar from '../../components/Navbar'

function Faq() {
  return (

    <div>
      <Navbar/>
      <section className={styles.heading}>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
      </section>
      <section className={styles.title}>
        <h2>PRODUCT INFORMATION</h2>
      </section>
    </div>
  )
}

export default Faq
