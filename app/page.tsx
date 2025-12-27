"use client"
import Cards from "@/components/layouts/cards";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import HomeLayout from "@/components/layouts/home-layout";
import PageWrapper from "@/components/layouts/page-wrapper";
import LoadingPlaceHolder from "@/components/ui/loadingPlaceHolder";
import { useWorkshopState } from "@/store/workshopStore";
import { useEffect } from "react";

export default function Home() {
  // get workshops state
  const { fetchWorkshopsCount, isLoading } = useWorkshopState();
  useEffect(() => {
    fetchWorkshopsCount();
  },[])

  return (
    <PageWrapper>
      <HomeLayout>
        <Header />
        {!isLoading
        ? < Cards />
        : <LoadingPlaceHolder />}
        <Footer />
      </HomeLayout>
    </PageWrapper>
  );
}
