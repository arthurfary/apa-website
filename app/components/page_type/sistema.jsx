import Menu from "../sistema_menu/menu"

export default function SystemPage({ children }) {
  return (
    <>
        <Menu />
        {children}

    </>
  )
}
