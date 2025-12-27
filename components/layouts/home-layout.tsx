function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center grid-background">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center md:py-8 py-4 md:px-16 px-6 sm:items-start bg-[linear-gradient(30deg,#fff0cd_0%,#fbf7ee_35%,#fefaf0_65%,#ffffff_85%,#fff6df_100%)] shadow-lg ">
        {children}
      </main>
    </div >
  )
}

export default HomeLayout
