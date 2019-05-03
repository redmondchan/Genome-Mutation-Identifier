import React from 'react'

class Results extends React.Component{

  sortResults = (array) => {
    let result = []
    let newResult
    array.forEach(obj => {
      if(!result.includes(`{"patientId": ${obj.patientId}, "index": []}`)){
        result.push(`{"patientId": ${obj.patientId}, "index": []}`)
      }
    })
    console.log("newResult", result, array)
    newResult = result.map(obj => JSON.parse(obj))

    for(let i=0; i < array.length; i++){
      for(let j=0; j<newResult.length; j++){
        console.log(newResult[j].patientId, array[i].patientId)
        if(newResult[j].patientId === array[i].patientId){
          newResult[j].index.push(array[i].index[0])
          console.log(array[i].index[0])
        }else {

        }
      }
    }
    return newResult
  }

  render(){
    console.log("props",this.props)
    let sortedArray = this.sortResults(this.props.results)
    console.log("sortedArray", sortedArray)
    let sortedDivs = sortedArray.map(obj => <div>Patient {obj.patientId}: Found sequence at {obj.index.join(', ')}</div>)
    return(
      <div>
        Results
        {sortedDivs}
      </div>

    )
  }
}

export default Results
