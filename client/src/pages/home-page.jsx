import Hero from "../components/hero";
import BlogCom from "../components/blogSection";
import Layout from "../layout/layout";

function HomePage() {
  return (
    <Layout>
      <Hero />
      <BlogCom />
    </Layout>
  );
}

export default HomePage;
