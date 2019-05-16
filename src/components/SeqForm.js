import React from 'react'

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="textarea" name="seq" placeholder="DNA Sequence" onChange={this.handleChange}></input>
          <input type="file" name="csv" placeholder="CSV File" onChange={this.handleChangeFile}></input>
          <button>Search</button>
        </form>
      </div>
    )
  }
}

export default SeqForm
