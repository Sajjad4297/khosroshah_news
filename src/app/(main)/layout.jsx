import Footer from "@/components/Footer/Footer";
import '@/Styles/global.css';
import '@/Styles/Font/font.css';
import Navbar from "@/components/navbar/navbar";
import Leftside from "@/components/Leftside/Leftside";
export const metadata = {
  title: "پایگاه خبری نوای تبریز",
  description: "پایگاه خبری نوای نبریز",
};

export default async function MainLayout({ children , showSidebar = true }) {
  return (
    <>
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
