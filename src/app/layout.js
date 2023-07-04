import './globals.css'
import Layout from '@/component/Layout/Layout'

export const metadata = {
  title: 'Alphalogics',
  description: 'Build Software',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#F5F5F5]' >
        <Layout>
        {children}
        </Layout>
        </body>
    </html>
  )
}
