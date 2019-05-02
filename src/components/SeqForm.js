import React from 'react'

class SeqForm extends React.Component{

  state={
    seq: "",
    csv: []
  }

  handleChangeFile = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {

  }

  render(){
    console.log(this.state)
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
