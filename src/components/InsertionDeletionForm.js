import React from 'react'

class InsertionDeletionForm extends React.Component{

  state={
    insertionDeletion: true,
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
      Insertion or Deletion
        <form onSubmit={this.handleSubmit}>
          <input type="textarea" name="seq" placeholder="Controlled DNA Sequence" onChange={this.handleChange}></input>
          <input type="file" name="csv" placeholder="CSV File" onChange={this.handleChangeFile}></input>
          <button>Search</button>
        </form>
      </div>
    )
  }
}

export default InsertionDeletionForm
