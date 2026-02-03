import './App.css'

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

  return (
    <>
    <div className="ex-space">
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
    </div></>
  )
}


export default App
