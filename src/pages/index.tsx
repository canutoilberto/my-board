import Head from "next/head";

import styles from "../styles/styles.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - The Organizer</title>
      </Head>
      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Ferramenta bord" />

        <section className={styles.callToAction}>
          <h1>
            Uma ferramenta para o seu dia-a-dia: escreva, pleneje e organize.
          </h1>
          <p>
            <span>100% Gratuita </span>e online.
          </p>
        </section>

        <div className={styles.donators}>
          <img
            src="https://sujeitoprogramador.com/steve.png"
            alt="imagens dos apoiadores"
          />
        </div>
      </main>
    </>
  );
}
