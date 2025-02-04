import Blog from "../components/blog";
import Hero from "../components/hero";

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
