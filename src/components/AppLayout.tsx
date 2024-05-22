import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";

const AppLayout = () => {
  return (
    <div className="min-h-screen min-w-full">
      <Navbar />

      <main className="mx-auto max-w-7xl min-h-screen relative">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
