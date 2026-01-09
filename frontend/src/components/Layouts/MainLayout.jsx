import React from "react";
import MainHeader from "../Header/MainHeader";
import MainFooter from "../Footer/MainFooter";
import AppRoutes from "../../app/AppRoutes";



const MainLayout = () => {
  return (
    <section className="flex min-h-screen flex-col">
      <header>
        <MainHeader />
      </header>
      <main className="flex-1">
        <AppRoutes />     
      </main>
      <footer>
        <MainFooter />
      </footer>
    </section>
  );
};

export default MainLayout;