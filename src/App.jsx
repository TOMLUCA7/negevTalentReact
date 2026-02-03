import './App.css'

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]


function App() {
  const showCompany = (name, revenue) => {
    return <div id={name}>{name} makes {revenue} every year</div>
  }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {companies.map((item) => (
          showCompany(item.name, item.revenue)
        ))}
      </div>
    </div>
  )
}


export default App
