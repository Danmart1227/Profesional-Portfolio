import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>


      <Head>
      
        <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
        crossorigin="anonymous">
        </link>
      
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Coming+Soon&family=Plus+Jakarta+Sans&family=Silkscreen&display=swap" rel="stylesheet"/>
      
        <link rel="icon" href="/pokeball.ico" />
      
    </Head> 
      
    
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
