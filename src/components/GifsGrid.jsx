import { useFetchGifs } from '../helpers/useFetchGifs'

export const GifsGrid = ({ category }) => {

  const { gifs, isLoading } = useFetchGifs(category)

  const chargeGrid = () => {

    if (!isLoading) {

      return (<h2>Nothing to show, pls find something</h2>)

    } else {

      return (

        <div className='card-grid'>

{gifs.map(gif => (

  <div key={gif.id} className="card card-grid" style={{ width: "18rem" }}>
    <div className="card-body">
      <img className="card-img-top" src={gif.url} alt="Card image cap" />
      <a href={gif.url} target="_blank">
        Go page
      </a>
    </div>
  </div>

))}
</div>
      
      )
    }
  }


  return (

    chargeGrid()
    
  )
}
