import './globals.css'
import Layout from '@/component/Layout/Layout'
import Script from 'next/script'
export const metadata = {
  title: 'Alphalogics',
  description: 'Build Software',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#F5F5F5] scroll-smooth' >
        <Layout>
        {children}
        </Layout>
        </body>
        <Script type="text/javascript">
{  `     
 
     window.__be = window.__be || {};
     window.__be.id = "64ae7a1767122000077e39e4";
     (function() {
         var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
         be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
         var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
     })();

  `}
    </Script>
    </html>
  )
}
