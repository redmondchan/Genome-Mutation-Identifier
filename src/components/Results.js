import React from 'react'

class Results extends React.Component{

  // takes the results and combines the results of the same patient
  sortResults = (array) => {
    let result = []
    let newResult
    array.forEach(obj => {
      if(!result.includes(`{"patientId": ${obj.patientId}, "index": []}`)){
        result.push(`{"patientId": ${obj.patientId}, "index": []}`)
      }
    })
    newResult = result.map(obj => JSON.parse(obj))
    console.log("before newResult", result, newResult, array)

    for(let i=0; i < array.length; i++){
      for(let j=0; j<newResult.length; j++){
        if(newResult[j].patientId === array[i].patientId){
          console.log("index", array[i].index[0])
          newResult[j].index.push(array[i].index[0])
        }else {

        }
      }
    }
    console.log("newResult", newResult)
    return newResult
  }

  render(){
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
