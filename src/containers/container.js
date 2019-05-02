import React from 'react'
import SeqForm from '../components/SeqForm'
import InsertionDeletionForm from '../components/InsertionDeletionForm'

class Container extends React.Component{

  
  render(){
    return(
      <div>
        Hi
        <SeqForm/>
        <InsertionDeletionForm/>
      </div>
    )
  }
}

export default Container
