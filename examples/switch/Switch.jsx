import { Switch,Button } from '../../dist/rnexui';

class App extends React.Component {
  state = {
    disabled: true,
  }
  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
  render() {
    return (
      <div>
	  	<Switch size="small" /><br/>
        <Switch disabled={this.state.disabled} />
		<Switch checkedText="开111" defaultChecked unCheckedText="关22" style={{width: 100}}/>
        <br />
		<Switch
         checkedColor="#13ce66"
         unCheckedColor="#ff4949"
		 checkedText="ON"
         unCheckedText="OFF"
		 disabled={this.state.disabled} 
		 onChange={(checked)=> console.log( `checked: ${checked}` )}
        />
	   	<br />
        <Button type="primary" onClick={this.toggle}>Toggle disabled</Button>
      </div>
    );
  }
}

ReactDOM.render(<App />,
  demo
);