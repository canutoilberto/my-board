import Head from "next/head";

import styles from "./styles.module.scss";

import { FiPlus, FiCalendar, FiEdit2, FiTrash } from "react-icons/fi";

export default function Board() {
  return (
    <>
      <Head>
        <title>Minhas Tarefas - Board</title>
      </Head>
      <main className={styles.container}>
        <form>
          <input type="text" placeholder="Digite sua Tarefa" />
          <button type="submit">
            <FiPlus size={25} color="#17181f" />
          </button>
        </form>

        <h1>Você tem 2 tarefas</h1>

        <section>
          <article className={styles.taskList}>
            <p>Aprender NextJS.</p>
            <div className={styles.actions}>
              <div>
                <div>
                  <FiCalendar size={20} color="#ffb800" />
                  <time>13 de Janeiro de 2023</time>
                </div>
                <button>
                  <FiEdit2 size={20} color="#fff" />
                  <span>Editar</span>
                </button>
              </div>

              <button>
                <FiTrash size={20} color="#ff3636" />
                <span>Excluir</span>
              </button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
