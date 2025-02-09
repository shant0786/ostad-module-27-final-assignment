import Hero from "../components/hero";
import Blog from "../components/blog";
import Layout from "../layout/layout";

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Blog />
    </Layout>
  );
}

export default HomePage;
