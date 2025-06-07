import Footer from "@/components/Footer/Footer";
import '@/Styles/global.css';
import '@/Styles/Font/font.css';
import Navbar from "@/components/navbar/navbar";
import Leftside from "@/components/Leftside/Leftside";
export const metadata = {
  title: "پایگاه خبری نوای تبریز",
  description: "پایگاه خبری نوای نبریز",
};

export default async function MainLayout({ children, showSidebar = true }) {
  return (
    <>
      <div id="div_eRasanehTrustseal_97721"></div>
      <script src="https://trustseal.e-rasaneh.ir/trustseal.js"></script>
      <script>eRasaneh_Trustseal(97721, false);</script>
      <Navbar />
      <div className="main-layout">
        <main className="main-content">
          {children}
        </main>
        {showSidebar && (
          <aside>
            <Leftside />
          </aside>
        )}
      </div>
      <Footer />
    </>
  );
}
