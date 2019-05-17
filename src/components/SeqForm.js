import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'


class SeqForm extends React.Component{

  state={
    insertionDeletion: false,
    seq: "",
    csv: ""
  }

  handleChangeFile = (e) => {
    console.log(e.target.files)
    this.setState({ [e.target.name]: e.target.files })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.csvToJson(this.state.csv, this.state.seq, this.state.insertionDeletion)
  }
  // <input label="CSV File" variant="outlined" type="file" name="csv" onChange={this.handleChangeFile}/>

  render(){
    return(
      <Grid item xs={6}>
        <Paper>
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <TextField label="DNA Sequence" variant="outlined" type="textarea" name="seq" onChange={this.handleChange}/>
            </div>
            <div className="form-input">
              <input className="hide-button" id="contained-button-file" type="file" name="csv" onChange={this.handleChangeFile}/>
              <label htmlFor="contained-button-file">
              <Button variant="contained" component="span">Upload CSV File</Button>
              </label>
            </div>
            <div className="form-input">
              <button>Search</button>
            </div>
          </form>
        </Paper>
      </Grid>
    )
  }
}

export default SeqForm
