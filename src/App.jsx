import { useState } from "react";
import Box from '../components/Box'
import './App.css'
import { Company } from "../components/Company";
import { Wardrobe } from "../components/Wardrobe";
import { Wardrobe2 } from "../components/Wardrobe2";
import { Hudini } from "../components/Hudini";
import { Landing } from "../components/Landing";
import { Home } from "../components/Home";
import { Item } from "../components/Item";
import Exercise1 from "../components/Exercise1";
import Exercise2 from "../components/Exercise2";
import DataFlowExercise1 from "../components/DataFlowExercise1";
import DataFlowExercise2 from "../components/DataFlowExercise2";
import ControlledTextarea from "../components/Textarea";
import Textarea from "../components/Textarea";
import DisplayTimeuseEffect from "../components/DisplayTimeuseEffect";
import FetchesPosts from "../components/FetchesPosts";

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]


function App() {
  const showCompany = (name, revenue) => {
    return <div id={companies.name}>{name} makes {revenue} every year</div>
  }

   const getClassName = (temperature) => { 
    return <div id="weatherBox">
      <p>{temperature < 15 ? "freezing" : temperature >= 15 && temperature < 30 ? "fair" : "hell-scape"}</p>
    </div>
   }

    let companies = [
        { name: "Tesla", revenue: 140 },
        { name: "Microsoft", revenue: 300 },
        { name: "Google", revenue: 600 }
    ]

    let wardrobe = [
          { type: "shirt", color: "red", size: "Medium" },
          { type: "shirt", color: "blue", size: "Medium" },
          { type: "pants", color: "blue", size: "Medium" },
          { type: "accessory", color: "sapphire", size: "" },
          { type: "accessory", color: "lilac", size: "" }
    ]

    const [data, setData] = useState({
      user: "Robyn",
      store: [
        { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
        { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
        { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
      ],
      // shouldDiscount: true,
      shouldDiscount: false,
      // currentPage: "Landing"
      currentPage: "Home"
    });

  return (
    <>
      {/* <div className="ex-space">
        <h4 className='ex-title'>Exercise 1</h4>
        <div className="exercise" id="ex-1">
          {companies.map((item) => (
            showCompany(item.name, item.revenue)
          ))}
        </div>
      </div>

      <div className="ex-space">
        <h4 className='ex-title'>Exercise 2</h4>
        <div className="exercise" id="ex-2">
          {getClassName(10)}
          {getClassName(20)}
          {getClassName(30)}
        </div>
      
      </div> */}


      {/* <Box text="fresh" color="green" />
      <Box text="calm" color="blue" />
      <Box text="adventurous" color="pink" />
      <Box text="happy" color="purple" /> */}

      {/* props exercise */}
{/* 
      {companies.map((item) => (
        <Company key={item.name} name={item.name.toUpperCase()}/>
      ))}

      {wardrobe.map((item) => (
        <Wardrobe key={item.name} type={item.type} color={item.color}/>
      ))}

      {wardrobe.map((item) => (
        <Wardrobe2 key={item.name} type={item.type} color={item.color}/>
      ))} */}

      {/* useState exercise */}
      {/* exercise 1 */}
      {/* <Hudini/> */}

      {/* exercise 2 */}
      {/* {data.currentPage === "Landing" ? <Landing name={data.user} store={data.store}/> : <Home store={data.store} currentPage={data.currentPage} shouldDiscount={data.shouldDiscount}/>} */}

      {/* <Exercise1/>
      <Exercise2/> */}

      {/* <DataFlowExercise1/> */}

      {/* <DataFlowExercise2/> */}

      {/* <Textarea/> */}

      {/* <DisplayTimeuseEffect/> */}

      {/* <FetchesPosts/> */}
    </>
  )
}


export default App
