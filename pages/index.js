import styles from '../styles/Home.module.css'
import {useEffect} from "react";

const randomNotification = () => {

  const notices = [
    { name: 'notice 1', author: 'author 1' },
    { name: 'notice 2', author: 'author 2' },
    { name: 'notice 3', author: 'author 3' },
    { name: 'notice 4', author: 'author 4' },
  ]
  const randomItem = Math.floor(Math.random() * notices.length);
  const notifTitle = notices[randomItem].name;
  const notifBody = `Created by ${notices[randomItem].author}.`;
  const options = {
    body: notifBody,
  };
  new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}

const Home = () => {
  useEffect(() => {
    const button = document.getElementById('notifications');

    if (button) {
      button.addEventListener('click', () => {
        Notification.requestPermission().then((result) => {
          if (result === 'granted') {
            randomNotification();
          }
        });
      })
    }
  });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <button id="notifications">Notifications</button>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Lets go to another page and see if it caches like magic.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Home;
