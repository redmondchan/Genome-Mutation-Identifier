import React from 'react'

class Results extends React.Component{

  // takes the results and combines the results of the same patient
  sortResults = (array) => {
    let result = []
    let newResult
    array.forEach(obj => {
      if (this.props.insertionDeletion) {
        if(!result.includes(`{"patientId": ${obj.patientId},  "mutation": "${obj.mutation}", "index": []}`)){
          result.push(`{"patientId": ${obj.patientId}, "mutation": "${obj.mutation}", "index": []}`)
        }
      } else {
        if(!result.includes(`{"patientId": ${obj.patientId}, "index": []}`)){
          result.push(`{"patientId": ${obj.patientId}, "index": []}`)
        }
      }
    })

    newResult = result.map(obj => JSON.parse(obj))

    for(let i=0; i < array.length; i++){
      for(let j=0; j<newResult.length; j++){
        if(newResult[j].patientId === array[i].patientId){
          newResult[j].index.push(array[i].index[0])
        }else {

        }
      }
    }
    return newResult
  }

  render(){
    let sortedArray = this.sortResults(this.props.results)
    console.log("sortedArray", sortedArray)
    let sortedDivs = this.props.insertionDeletion ?
    sortedArray.map(obj => <div>Patient {obj.patientId}: Found {obj.mutation} at {obj.index.join(', ')}</div>) :
    sortedArray.map(obj => <div>Patient {obj.patientId}: Found sequence at {obj.index.join(', ')}</div>)

    return(
      <div>
        Results
        {sortedDivs}
      </div>
    )
  }
}

export default Results
