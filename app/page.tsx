import Cards from "@/components/layouts/cards";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import HomeLayout from "@/components/layouts/home-layout";

export default function Home() {
  return (
    <HomeLayout>
      <Header />
      <Cards />
      <Footer />
    </HomeLayout>
  );
}
