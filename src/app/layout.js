import Head from './head'

export default function RootLayout({ children }) {
  
  return (
    <html lang="pt-br">
      <Head/>
      <body id="inicio">{children}</body>
    </html>
  )
}