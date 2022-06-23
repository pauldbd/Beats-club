import * as React from "react"
import Title from "../components/Title"
import Texts from "../components/Text"

class indexPage extends React.Component {
  render(){
    return (
      <div>
        <Title/>
        <Texts>Ivory Hills is a production collective based in Albuquerque, New Mexico. The collective also facilitates La Cueva Highschool's Beats / Production Club. 
        </Texts>
      </div>
    )
  }
}

export default indexPage; 
