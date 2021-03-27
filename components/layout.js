import NavBar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => (
	<div className="ac-cadet-blue">
		<NavBar/>
		{children}
		<Footer />
	</div>
)

export default Layout