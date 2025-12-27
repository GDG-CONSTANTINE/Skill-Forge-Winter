import Cards from "@/components/layouts/cards";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import HomeLayout from "@/components/layouts/home-layout";
import PageWrapper from "@/components/layouts/page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <HomeLayout>
        <Header />
        <Cards />
        <Footer />
      </HomeLayout>
    </PageWrapper>
  );
}
