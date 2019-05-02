import React from 'react'
import Papa from 'papaparse'
import SeqForm from '../components/SeqForm'
import InsertionDeletionForm from '../components/InsertionDeletionForm'

class Container extends React.Component{

  csvToJson = (csv) => {
    console.log(csv[0])
    Papa.parse(csv[0], {
      header: true,
      complete: function(results) {
        console.log(results)
      }
    })
  }

  render(){
    return(
      <div>
        Hi
        <SeqForm csvToJson={this.csvToJson}/>
        <InsertionDeletionForm/>
      </div>
    )
  }
}

export default Container
