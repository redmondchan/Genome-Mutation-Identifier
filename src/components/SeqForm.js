import React from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


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

  render(){
    return(
      <Card style={{float: 'left', width: '44%'}}>
        <form onSubmit={this.handleSubmit}>
          <TextField label="DNA Sequence" variant="outlined" type="textarea" name="seq" onChange={this.handleChange}/>
          <input label="CSV File" variant="outlined" type="file" name="csv" onChange={this.handleChangeFile}/>
          <input className="hide-button" id="contained-button-file" type="file"/>
          <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" onChange={this.handleChangeFile}>
          Upload
          </Button>
          </label>
          <button>Search</button>
        </form>
      </Card>
    )
  }
}

export default SeqForm
