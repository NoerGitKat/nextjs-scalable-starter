import Cat from "../components/cards/cat/Cat";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import SidebarLayout from "../components/layouts/sidebar/SidebarLayout";
import styles from "../styles/Home.module.scss";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to the <a href="https://nextjs.org/">Next.js</a> starter!
      </h1>
      <Cat
        tag="Feline"
        title="hello"
        image="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
        body="This is a sweet kitty"
        author="NoerGitKat"
        time="2h ago"
      />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
