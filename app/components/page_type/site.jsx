import Header from "../header/header"
import Footer from "../footer/footer"

export default function SitePage({ children }) {
  return (
    <>
        <Header />

        {children}
        <Footer/>
    </>

  )
}
