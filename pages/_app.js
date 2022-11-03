import Head from "next/head";
import Script from "next/script";
import '../styles/globals.css'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
     <Head>
        <title>Daniel Martinez Website</title>
        <meta name="description" content="Daniel Martinez portfolio website" />  
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://kit.fontawesome.com/f9a0824155.js" crossOrigin="anonymous"></script>
      </Head>
    
      
      <script 
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" 
      crossOrigin="anonymous">   
      </script>
              
      <Component {...pageProps} />
    </Layout>
  )
}