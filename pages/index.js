/* Nutrition-Project - Arin Chase - 2021 */

/* Imports */
import Head from 'next/head'
import { Image } from 'react-bootstrap'
import fetch from 'isomorphic-unfetch'
import { useState } from 'react'

const NutritionHome = () => {

  let [data, setData] = useState(0); // Used for ajax
  let [hasSearched, setHasSearched] = useState(0);

  const fetchData = async event => {
    event.preventDefault() // Stop page reload from form submit

    const res = await fetch(`/api/search?query=${event.target.input.value}`); // Get api data from user form input

    const json = await res.json();

    setData(json); // Update data with api results asynchronously
    setHasSearched(true);
  }

  /* Renders the api results in a table format */
  function renderData() {
    /* If the api found an item given the user input */
    if(data.foods) {
      return (
        <div className="card ac-super-light ac-bg">
          <div className="card-body ac-grey-medium ac-text">
            <h5 className="card-title py-3 px-2 m-0 bg-white text-center"><Image className="thumbnail py-2" src={data.foods[0].photo.thumb} alt={data.foods[0].food_name} /> {data.foods[0].food_name} </h5>
            <table className="table table-sm table-responsive-stack ac-grey-medium ac-text bg-white" id="foodTable">
              <thead>
                <tr>
                  <th scope="col">Calories</th>
                  <th scope="row">Sodium</th>
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
                <tr className="p-3">
                  <td><span className="responsive-thead">Calories: </span> {Math.round(data.foods[0].nf_calories)} </td>
                  <td><span className="responsive-thead">Sodium: </span> {data.foods[0].nf_sodium}m g </td>
                  <td><span className="responsive-thead">Total Fat: </span> {data.foods[0].nf_total_fat} g </td>
                  <td><span className="responsive-thead">Saturated Fat: </span> {data.foods[0].nf_saturated_fat} g </td>
                  <td><span className="responsive-thead">Cholesterol: </span> {data.foods[0].nf_cholesterol} mg </td>
                  <td><span className="responsive-thead">Carbohydrates: </span> {data.foods[0].nf_total_carbohydrate} g </td>
                  <td><span className="responsive-thead">Fiber: </span> {data.foods[0].nf_dietary_fiber} g </td>
                  <td><span className="responsive-thead">Sugar: </span> {data.foods[0].nf_sugars} g </td>
                  <td><span className="responsive-thead">Protein: </span> {data.foods[0].nf_protein} g </td>
                  <td><span className="responsive-thead">Potassium: </span> {data.foods[0].nf_potassium} mg </td>     
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
    /* No ingredients were found from API */
    else if (hasSearched) {
      return (
        <h4 className="px-2 pt-2 pb-5 ac-grey-medium ac-text text-center">No items found</h4>
      )
    }
    else return null; // Hasn't searched api yet
  }

  /* Main page */
  return (
  <>
    <Head>
      <title>Nutrition Calculator</title>
      <meta name="description" content="Nutrition Calculator" />
      <meta name="keywords" content="nutrition, calculator, food, api" />
      <meta name="author" conten="Arin Chase" />
      <link rel="icon" href="/images/food.png" />
      <script src="https://code.jquery.com/jquery-3.6.0.min.js" />
    </Head>

    <main className="ac-super-light ac-bg">

      <div className="p-5 text-center ac-cadet-blue ac-bg text-white" id="home">
        <div className="navSpace"></div>
        <Image src="/images/food.png" alt="nutrition-calculator-image" className="m-3 ac-super-light ac-bg p-3 nutrition-icon" roundedCircle />
        <h1 className="display-4 pt-4 ac-super-light ac-text"><strong>Nutrition Calculator</strong></h1>
        <h4 className="px-2 py-4 ac-super-light ac-text">Powered by <a className="ac-grey-medium ac-text underlined" href="https://nutritionix.com" target="_blank">Nutritionix Api</a></h4>
      </div>
      
      <div className="ac-super-light ac-bg">
        <div id="search">
          <div className="navSpace"></div>
          <h4 className="px-2 pt-2 pb-5 text-center ac-grey-medium ac-text">Find nutritional info on ingredients and meals</h4>
          
          <form onSubmit={fetchData} className="ac-cadet-blue" id="form">
            <div className="field">
              <input className="button" type="submit" value="Search" name="submit" />
              <input type="text" placeholder="Enter an ingredient..." name="input" autoComplete="off" required /> 
            </div>
          </form>
          <div className="py-5">{renderData()}</div>
        </div>
       
      </div>
    </main>
  </>
  )
}

export default NutritionHome