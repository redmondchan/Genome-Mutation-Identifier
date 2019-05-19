import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

class InsertionDeletionForm extends React.Component{

  state={
    insertionDeletion: true,
    seq: "",
    csv: "",
    buttonValue: "Upload CSV File"
  }

  handleChangeFile = (e) => {
    console.log(e.target.files)
    this.setState({ [e.target.name]: e.target.files, buttonValue: e.target.files[0].name  })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.csvToJson(this.state.csv, this.state.seq, this.state.insertionDeletion)
  }

  render(){
    const { classes } = this.props;
    return(
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          Insertion or Deletion
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <TextField label="DNA Sequence" variant="outlined" type="textarea" name="seq" onChange={this.handleChange}/>
            </div>
            <div className="form-input">
              <input className="hide-button" id="contained-insert-button-file" type="file" name="csv" onChange={this.handleChangeFile}/>
              <label htmlFor="contained-insert-button-file">
              <Button variant="contained" component="span">{this.state.buttonValue}</Button>
              </label>
            </div>
            <div className="form-input">
              <Button type='submit' variant="contained" color="primary">Search</Button>
            </div>
          </form>
          </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(InsertionDeletionForm)
