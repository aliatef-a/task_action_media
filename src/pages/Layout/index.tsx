import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Spinner from "../../components/shared/Spinner";
import Navbar from "../../components/Headers/Navbar";
import Footer from "../../components/Headers/Footer";
import ScrollToTop from "../../components/shared/ScrollToTop";
import { useTranslation } from "react-i18next";

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Suspense fallback={<Spinner />}>
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  );
}

export default Layout;
