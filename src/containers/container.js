import React from 'react'
import Papa from 'papaparse'
import Results from '../components/Results'
import SeqForm from '../components/SeqForm'
import InsertionDeletionForm from '../components/InsertionDeletionForm'

class Container extends React.Component{

  state={
    insertionDeletion: false,
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
    console.log(filteredResults)
    return filteredResults
  }

  // converts csv to json and sets the inputted seq into state
  csvToJson = (csv, seq, boolean) => {
    let result = []
    Papa.parse(csv[0], {
      header: true,
      complete: this.jsonResults
    })
    this.setState({seq: seq, insertionDeletion: boolean})
  }

  insertionOrDeletion = (control, array) => {
    console.log("insertion deletion", control, array)
    let results = []
for(let i=0; i < array.length; i++){
  if(array[i].dna.length > control.length){
    let n = 0
    for(let j=0; j<array[i].dna.length; j++){
      let x = j + n
      if(array[i].dna[x] !== control.charAt(j)){
        n++
        console.log(n, "charAt", j, x, array[i].dna[x], array[i].patientId, control.charAt(j))
        if(array[i].dna[x] !== undefined){
          results.push({id: array[i].patientId, mutation: "insertion", index: [x]})
        }
      }
    }
  }
  if(array[i].dna.length < control.length){
    let n = 0
    if(control.includes(array[i].dna)){
     results.push({id: array[i].patientId, mutation: "deletion", index: [8]})
    } else {
      for(let j=0; j<control.length; j++){
      let x = j + n
      if(array[i].dna[j] !== control.charAt(x)){
        n++
        if(array[i].dna[j] !== undefined){
          results.push({id: array[i].patientId, mutation: "deletion", index: [j]})
        }
      }
    }
    }
  }
}
console.log("insert", results)
return results
  }

  // <Results results={this.state.insertionDeletion ? this.insertionOrDeletion(this.state.seq, this.state.results) : this.searchForSeq(this.state.results, this.state.seq)}/>


  render(){
    this.insertionOrDeletion(this.state.seq, this.state.results)
    return(
      <div>
        Hi
        <SeqForm csvToJson={this.csvToJson}/>
        <InsertionDeletionForm csvToJson={this.csvToJson}/>
      </div>
    )
  }
}

export default Container
