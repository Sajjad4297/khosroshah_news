import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/Footer/Footer"

export default function SimpleLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}
