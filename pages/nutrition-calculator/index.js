import Head from 'next/head'

import { Image } from 'react-bootstrap'

import fetch from 'isomorphic-unfetch'

import { useState } from 'react'

//import { iconName } from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NutritionHome = () => {

  let [data, setData] = useState(0);


  const fetchData = async event => {
    event.preventDefault() // Don't redirect page

    const res = await fetch(`http://localhost:3000/api/search?query=${event.target.input.value}`);

    const json = await res.json();

    setData(json);
  }

  function renderData() {
    if(data) {
      return (
        <div className="card mb-3">
          <div className="card-body text-dark">
            <h5 className="card-title"><Image className="thumbnail pb-2 mx-2" src={data.foods[0].photo.thumb} /> {data.foods[0].food_name} </h5>
            <table class="table card-text">
              <thead>
                <tr>
                  <th scope="col">Calories</th>
                  <th scope="col">Sodium</th>
                  <th scope="col">Total Fat</th>
                  <th scope="col">Saturated Fat</th>
                  <th scope="col">Cholesterol</th>
                  <th scope="col">Carbohydrates</th>
                  <th scope="col">Fiber</th>
                  <th scope="col">Sugar</th>
                  <th scope="col">Protein</th>
                  <th scope="col">Potassium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {data.foods[0].nf_calories} </td>
                  <td> {data.foods[0].nf_sodium} </td>
                  <td> {data.foods[0].nf_total_fat} </td>
                  <td> {data.foods[0].nf_saturated_fat} </td>
                  <td> {data.foods[0].nf_cholesterol} </td>
                  <td> {data.foods[0].nf_total_carbohydrate} </td>
                  <td> {data.foods[0].nf_dietary_fiber} </td>
                  <td> {data.foods[0].nf_sugars} </td>
                  <td> {data.foods[0].nf_protein} </td>
                  <td> {data.foods[0].nf_potassium} </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  }

  return (
  <>
    <Head>
      <title>Nutrition Calculator</title>
      <link rel="icon" href="/images/food.png" />
    </Head>

    <main className="ac-super-light ac-bg">
      <div className="p-5 text-center ac-cadet-blue ac-bg text-white" id="home">
        <div className="navSpace"></div>
        <Image src="/images/food.png" className="m-3 ac-super-light ac-bg p-3 nutrition-icon" roundedCircle />
        <h1 className="display-4 pt-4 ac-super-light ac-text"><strong>Nutrition Calculator</strong></h1>
        <h4 className="px-2 py-4 ac-super-light ac-text">Find nutritional info on ingredients and meals</h4>
      </div>
      
      <div className="container ac-super-light ac-bg">
        <div className="text-center" id="search">
          <div className="navSpace"></div>
          <form onSubmit={fetchData} className="ac-cadet-blue">
            <div className="field">
              <input className="button" type="submit" value="Search" name="submit" />
              <input type="text" placeholder="Enter an ingredient here..." name="input" autoComplete="off" required /> 
            </div>
          </form>
          <div className="navSpace"></div>
        </div>
        {renderData()}
      </div>
    </main>
  </>
  )
}

export default NutritionHome