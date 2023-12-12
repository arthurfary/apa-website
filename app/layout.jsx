import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'APA São Bento do Sul',
  description: 'Junte-se à APA em apasbs.org para fazer a diferença na vida dos animais! Descubra como você pode contribuir através de doações, voluntariado ou adotando um pet. Explore nossas histórias inspiradoras e saiba mais sobre nosso compromisso com o bem-estar animal. Adote um amigo, transforme uma vida!',
  // Adicione palavras-chave relevantes
  keywords: 'adoção de animais, voluntario, doações, bem-estar animal, APA São Bento do Sul, associação protetora dos animais, animais abandonados, animais de rua, animais resgatados, animais para adoção, animais para adotar, animais para doação',
  // Meta tags adicionais para melhorar a acessibilidade e SEO
  'robots': 'index, follow',
  'charset': 'UTF-8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>

        {children}
        
      </body>
    </html>
  )
}