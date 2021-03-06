import { RRadio,Button,Radio } from '../dist/rnexui';
import React from 'react';

class App extends React.Component {
  state = {
    disabled: true,
  }
  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
  render() {
    return (
      <div>
        <Radio defaultChecked={false} disabled={this.state.disabled}>Disabled</Radio>
        <br />
        <Radio defaultChecked disabled={this.state.disabled}>Disabled</Radio>
        <div style={{ marginTop: 20 }}>
          <Button type="primary" onClick={this.toggleDisabled}>
            Toggle disabled
          </Button>
        </div>
      
		  <form>
			<RRadio disabled checked={true}/>
			<RRadio disabled />
			<RRadio name="test" onChange={(e)=>console.log(e)} />
			<RRadio name="test" onChange={(e)=>console.log(e)} />
		  </form>
	  
	  </div>
    );
  }
}

ReactDOM.render(<App/>, demo);