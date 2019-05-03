import React from 'react'
import Papa from 'papaparse'
import Results from '../components/Results'
import SeqForm from '../components/SeqForm'
import InsertionDeletionForm from '../components/InsertionDeletionForm'

class Container extends React.Component{

  state={
    results: [],
    seq: ""
  }

  // sets the json result after papa parse converts it
  jsonResults = (results) => {
    this.setState({results: results.data})
  }

  // searches for the specific sequence in a pool of patients
  searchForSeq = (array, seq) => {
    let filteredResults = []
    array.forEach(obj => {
      for(let i = 0; i < obj.dna.length; i++){
        const n = seq.length
        if(obj.dna.substring(i, i+n) === seq){
          filteredResults.push({patientId: parseInt(obj.patientId), index: [i]})
        }
      }
    })
    return filteredResults
  }

  // converts csv to json and sets the inputted seq into state
  csvToJson = (csv, seq) => {
    let result = []
    console.log(csv)
    Papa.parse(csv[0], {
      header: true,
      complete: this.jsonResults
    })
    this.setState({seq: seq})
  }


  render(){
    return(
      <div>
        Hi
        <SeqForm csvToJson={this.csvToJson}/>
        <InsertionDeletionForm/>
        <Results results={this.searchForSeq(this.state.results, this.state.seq)}/>
      </div>
    )
  }
}

export default Container
