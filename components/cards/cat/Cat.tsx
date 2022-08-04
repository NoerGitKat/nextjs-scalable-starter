import Image from "next/image";
import "./Cat.module.scss";

export interface ICatProps {
  tag: string;
  title: string;
  image: string;
  body: string;
  author: string;
  time: string;
}

const Cat: React.FC<ICatProps> = ({
  tag,
  title,
  image,
  body,
  author,
  time,
}) => {
  return (
    <section className="container">
      <article className="card">
        <header className="card__header">
          <Image
            src={image}
            alt="card__image"
            className="card__image"
            width="300"
            height="300"
          />
        </header>
        <aside className="card__body">
          <span className="tag tag--blue">{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </aside>
        <footer className="card__footer">
          <aside className="user">
            <Image
              src="https://i.pravatar.cc/40?img=2"
              alt="user__image"
              className="user__image"
              width="40"
              height="40"
            />
            <div className="user__info">
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
