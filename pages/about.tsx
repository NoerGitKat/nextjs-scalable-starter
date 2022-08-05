import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import SidebarLayout from "../components/layouts/sidebar/SidebarLayout";
import { NextPageWithLayout } from "./page";

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore dicta,
        nobis assumenda autem culpa harum rerum tenetur quod officia sequi
        laboriosam sapiente voluptate amet eligendi voluptatibus, deserunt ea
        cupiditate accusantium.
      </p>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
