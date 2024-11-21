import './style.css'

function Index() {

  return (
    <>
      <div className="fare-table">
      <table>
        <thead>
          <tr>
            <th>CAR TYPE</th>
            <th>MODEL INCLUDES</th>
            <th>PASSENGERS</th>
            <th>IDEAL FOR</th>
            <th>FARE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AC Sedans</td>
            <td>Etios, Amaze, Dzire etc.</td>
            <td>4 Pax</td>
            <td>Comfortable trips with small families</td>
            <td>Rs.11/KM</td>
          </tr>
          <tr>
            <td>AC Hatchbacks</td>
            <td>Wagon R, Celerio, Micra etc.</td>
            <td>4 Pax</td>
            <td>Budget trips over short distances</td>
            <td>Rs.11/KM</td>
          </tr>
          <tr>
            <td>AC SUV</td>
            <td>Ertiga, Xylo etc.</td>
            <td>6-7 Pax</td>
            <td>Premium trips with large families</td>
            <td>Rs.13/KM</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Index
