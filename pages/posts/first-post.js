import Head from 'next/head'

import { Container, Row, Col, Button, Jumbotron, Image } from 'react-bootstrap'

//import { iconName } from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FirstPost = () => (
  <>

    <Head><title>Nutrition Calculator</title></Head>

    <div className="py-5 text-center ac-cadet-blue ac-bg text-white" id="home">
      <div className="navSpace"></div>
      <Image src="/images/avatar.png" className="my-4"/>
      <h1 className="display-3 px-2 py-3 ac-super-light ac-text"><strong>Arin Chase</strong></h1>
      <h4 className="px-2 py-4 ac-super-light ac-text">Programmer - Web Developer - Gamer</h4>
    </div>

    
    <div className="py-5 text-center ac-super-light ac-bg" id="about">
      <div className="navSpace"></div>
      <h1 className="display-4 px-2 py-3 ac-dark ac-text"><strong>About</strong></h1>
      <h4 className="px-2 py-4 ac-dark ac-text">I have a Computer Science degree from the Lamar University.</h4>
    </div>

    <div className="space"></div>
  </>
)

export default FirstPost