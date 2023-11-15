import Header from "../header/header"

export default function SitePage({ children }) {
  return (
    <>
        <Header />

        {children}

    </>
  )
}
