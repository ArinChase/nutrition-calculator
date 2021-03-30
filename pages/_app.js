/* Next.Js Web Application - Arin Chase - 2021 */

/* Imports */
import App from 'next/app'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/main.css'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Layout>
      	<Component {...pageProps} />
      </Layout>
    )
  }
}