import { Trigger,Button } from '../../dist/rnexui';

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
	  	<Trigger content={<div style={{padding: 10, border: '1px solid red', background: '#fff'}}>popup click...</div>}>
        	<Button type="primary" onClick={this.toggle}>Click</Button>
		</Trigger>
		<Trigger content={<div style={{padding: 10, border: '1px solid red', background: '#fff'}}>popup hover...</div>} action="hover">
        	<Button type="primary" onClick={this.toggle}>Hover</Button>
		</Trigger>
		<Trigger content={<div style={{padding: 10, border: '1px solid red', background: '#fff'}}>popup focus...</div>} action="focus">
        	<Button type="primary" onClick={this.toggle}>Focus</Button>
		</Trigger>
      </div>
    );
  }
}

ReactDOM.render(<App />,
  demo
);