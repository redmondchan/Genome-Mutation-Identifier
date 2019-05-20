import React from 'react'
import Papa from 'papaparse'
import Results from '../components/Results'
import SeqForm from '../components/SeqForm'
import InsertionDeletionForm from '../components/InsertionDeletionForm'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
})

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
    return filteredResults
  }

  // converts csv to json and sets the inputted seq into state
  csvToJson = (csv, seq, boolean) => {
    Papa.parse(csv[0], {
      header: true,
      complete: this.jsonResults
    })
    this.setState({seq: seq, insertionDeletion: boolean})
  }

  insertionOrDeletion = (control, array) => {
    let results = []
    for(let i=0; i < array.length; i++){
      if(array[i].dna.length > control.length){
        let n = 0
        for(let j=0; j<array[i].dna.length; j++){
          let x = j + n
          if(array[i].dna[x] !== control.charAt(j)){
            n++
            if(array[i].dna[x] !== undefined){
              results.push({patientId: parseInt(array[i].patientId), mutation: "insertion", index: [x]})
            }
          }
        }
      }
      if(array[i].dna.length < control.length){
        let n = 0
        if(control.includes(array[i].dna)){
         results.push({patientId: parseInt(array[i].patientId), mutation: "deletion", index: [8]})
        } else {
          for(let j=0; j<control.length; j++){
          let x = j + n
          if(array[i].dna[j] !== control.charAt(x)){
            n++
            if(array[i].dna[j] !== undefined){
              results.push({patientId: parseInt(array[i].patientId), mutation: "deletion", index: [j]})
            }
          }
        }
        }
      }
    }
    return results
  }

  render(){
    const { classes } = this.props;
    return(
      <div >
        <Grid container>
          <SeqForm csvToJson={this.csvToJson}/>
          <InsertionDeletionForm csvToJson={this.csvToJson}/>
          <Results results={this.state.insertionDeletion ? this.insertionOrDeletion(this.state.seq, this.state.results) : this.searchForSeq(this.state.results, this.state.seq)} insertionDeletion={this.state.insertionDeletion}/>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Container)
