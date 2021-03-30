/* Footer template - Arin Chase - 2021 */

/* Imports */
import { Container } from 'react-bootstrap'

/* Returns current year so there is no need to update again */
function getYear() {
	let d = new Date();
	return d.getFullYear();
}

/* Main footer */
const Footer = () => (
  <div className="text-center ac-super-light ac-bg" id="footer">
   	 <h5 className="px-2 py-3 ac-dark ac-text m-0">Copyright © {getYear()} Arin Chase</h5>
  </div>
)

export default Footer