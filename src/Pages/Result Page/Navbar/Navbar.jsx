import Badminton from '../Badminton/Badminton';
import BBSection from '../BasketballScore/BasketBallSection';
import './Navbar.css';

const navJSON=[{
    name: "Cricket",
    
  },
  {
    name: "Football",
    

  },
  {
    name: "VolleyBall",
    
  },
  {
    name: "Basketball",
   
  },

  
  {
    name: "Table Tennis",
   
  },
  {
    name: "Badminton",
    
  },
  
]
export default function Navbar(){
    
    return (<>
    <div className="results-navContainer">
    <ul>
                {
                  navJSON.map((item, i) => {
                    console.log(item.name)
                    return (
                      <li key={i}>
                        <div onClick={()=>{console.log("hi")}} className='divContainer'>
                          {item.name}
                        </div>
                      </li>
                    );
                  })
                }
              </ul>
              <div className="sportContainer">
                {/* <BBSection/> */}
                <Badminton/>
              </div>
        </div></>)
}