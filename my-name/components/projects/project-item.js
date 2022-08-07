
import Image from 'next/image';

export default function ProjectItem ({data}){

  const projectTitle = data.properties.이름.id; 
  const notionLink = data.url; 
  const tag = data.properties.태그.id; 
  const imgSrc = data.cover.external.url;
  const tags = data.properties.Tags;
  return (
    <div className='flex p-6 flex-col bg-slate-500 rounded-md m-3'>
      <Image src={imgSrc} width="100%" height="60%" layout='responsive'
      quality={100}
      alt="coverImage"
      objectFit='cover'
      className='rounded-t-xl'
      />
      <h1 className='m-2 text-lg tracking-widest'>{projectTitle}</h1>
      <h3>{tag}</h3>
      <a href={notionLink}>링크 바로가기</a>

      <div className='flex items-start mt-2'>
          {tags.map((aTag)=>(
          
            <h1 key={aTag.id} className='px-2 py-1 mr-2 rounded-md bg-skey-200 dark:bg-sky-800'>{}</h1>
          ))}
      </div>
    </div>
  )
}