import Header from './header'
import Footer from './footer'
import Main from './home/main'


export default function Layout({children}) {
return (
  <>
   <div className='bg-primary'>
      <Header/>
      <div>{children}</div>
      <Footer/>
      </div>
  </>
)
}