import React from 'react';

export default class SimpleClass extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
        val: '',
        updateText: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(){
    this.setState({
        updateText: `Anda menginput ${this.state.val}`
    })
  }

  handleChange(e: any){
    this.setState({
        val: e.target.value
    })
  }

  render() {
    return (
        <>
            <div style={{margin: '50px'}}>
                <input type="text" value={this.state.val} onChange={this.handleChange}/>
            </div>
            <div>
                <button onClick={this.handleClick}>Tes Class</button>
            </div>

            <p style={{margin: '50px'}}>{this.state.updateText}</p>
        </>
    )
  }

}