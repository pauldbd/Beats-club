import * as React from "react"
import Title from "../components/Title"
import Texts from "../components/Text"

class indexPage extends React.Component {
  render(){
    return (
      <div>
        <Title/>
        <Texts>Ivory Hills is a production collective based in Albuquerque, New Mexico. The collective also facilitates the La Cueva Highschool Beats / Production Club. 
          In addition to that, the collective has a vast collection of projects, ranging from Hip Hop to Hyper Pop, to Trap. 
        </Texts>
      </div>
    )
  }
}

export default indexPage; 
