import Layout from '../components/layout'
import Head from 'next/head'
import { TOKEN, DATABASE_ID } from '../config';
import ProjectItem from '../components/projects/project-item';

export default function Projects({projects}) {

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen px-5 py-10 mb-10">        
        <Head>
          <title>This Is My App</title>
          <meta name="description" content="Welcome my App" />
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <h1 className='text-4xl font-bold sm:text-6xl'>총 프로젝트 : {projects.results.length}
          <span className='pl-4 text-blue-500'></span>
        </h1>
        
        <div className='grid grid-cols-1 md:gird-cols-2 gap-8 w-full m-6 py-10'>
           {projects.results.map((aProject) => (
             <ProjectItem key={aProject.id} data={aProject}/>
             ))}
        </div>
        </div>
      </Layout>
    </>
  )
}

// 빌드 타임에 호출됌
export async function getStaticProps() {

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization : `Bearer ${TOKEN}`
    },
    body: JSON.stringify({page_size: 100})
  };
  
  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
 
  const projects = await res.json();
  const projectses = projects.results.map(( pro ) => {
    pro
  })

  return {
    props: {projects}, // will be passed to the page component as props
  }
}