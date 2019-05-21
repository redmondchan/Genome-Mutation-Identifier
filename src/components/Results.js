import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  list: {
    textAlign: 'center'
  },
  grid: {
    maxWidth: '99%',
    margin: '1%'
  }
})

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

    const { classes } = this.props
    let sortedArray = this.sortResults(this.props.results)

    //creates divs differently based on boolean value of props
    let sortedDivs = this.props.insertionDeletion ?
    sortedArray.map(obj =>
      <ListItem className={classes.list}>
        <ListItemText primary={`Patient ${obj.patientId}: Found ${obj.mutation} after position ${obj.index.join(', ')}`}/>
      </ListItem>
      ) :
    sortedArray.map(obj =>
      <ListItem className={classes.list}>
        <ListItemText primary={`Patient ${obj.patientId}: Found sequence at position ${obj.index.join(', ')}`}/>
      </ListItem>
      )

    return(
      <Grid item xs={12} className={classes.grid}>
        <Paper>
          <List>
            {sortedArray.length} Results
            {sortedDivs}
          </List>
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(Results)
