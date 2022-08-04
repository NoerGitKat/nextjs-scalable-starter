import Image from "next/image";
import styles from "./Cat.module.scss";

export interface ICatProps {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const Cat: React.FC<ICatProps> = ({ tag, title, body, author, time }) => {
  return (
    <section className={styles.container}>
      <article className={styles.card}>
        <header className={styles.card__header}>
          <Image
            src="/time-cat.jpg"
            alt="card__image"
            className={styles.card__image}
            width="600"
            height="400"
          />
        </header>
        <aside className={styles.card__body}>
          <span className={`${styles.tag} ${styles["tag-blue"]}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </aside>
        <footer className={styles.card__footer}>
          <aside className={styles.user}>
            <Image
              src="https://i.pravatar.cc/40?img=3"
              alt="user__image"
              className={styles.user__image}
              width="40"
              height="40"
            />
            <div className={styles.user__info}>
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </aside>
        </footer>
      </article>
    </section>
  );
};

export default Cat;
