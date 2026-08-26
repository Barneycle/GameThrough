import Navbar from '../pages/Navbar'
import Footer from '../pages/Footer'

export default function SiteLayout({ children, withFooter = true }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      {withFooter ? <Footer /> : null}
    </div>
  )
}
