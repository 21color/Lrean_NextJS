import Head from 'next/head'
import Main from '../components/home/main'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>This Is My App</title>
        <meta name="description" content="Welcome my App" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
      </Head>
      <section className="flex min-h-screen flex-col    items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Main/>
        </div>
      </section>
    </Layout>
  )
}
