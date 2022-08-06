import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import Sidebar from "../components/layouts/sidebar/Sidebar";
import styles from "../styles/About.module.scss";
import { NextPageWithLayout } from "./page";

const About: NextPageWithLayout = () => {
  return (
    <section className={styles.section}>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore dicta,
        nobis assumenda autem culpa harum rerum tenetur quod officia sequi
        laboriosam sapiente voluptate amet eligendi voluptatibus, deserunt ea
        cupiditate accusantium. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit.
      </p>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Sidebar />
      {page}
    </PrimaryLayout>
  );
};
