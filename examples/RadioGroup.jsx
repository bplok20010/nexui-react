import { RRadio,Button,Radio,RadioGroup, Input } from '../dist/rnexui';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear', disabled:true },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

class App3 extends React.Component {
  state = {
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
  }
  onChange1 = (e) => {
    console.log('radio1 checked', e);
    this.setState({
      value1: e,
    });
  }
  onChange2 = (e) => {
    console.log('radio2 checked', e);
    this.setState({
      value2: e,
    });
  }
  onChange3 = (e) => {
    console.log('radio3 checked', e);
    this.setState({
      value3: e,
    });
  }
  render() {
    return (
      <div>
        <RadioGroup options={plainOptions} onChange={this.onChange1} value={this.state.value1} />
        <RadioGroup options={options} onChange={this.onChange2} value={this.state.value2} />
        <RadioGroup disabled style={{ display:'block', marginTop: 5 }} options={optionsWithDisabled} onChange={this.onChange3} value={this.state.value3} />
      </div>
    );
  }
}


class App2 extends React.Component {
  state = {
    value: 1,
  }
  onChange = (value) => {
    console.log('radio checked', value);
    this.setState({
      value: value,
    });
  }
  render() {
    const radioStyle = {
      display: 'block',
      height: '26px',
      lineHeight: '26px',
    };
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1}>Option A</Radio>
        <Radio style={radioStyle} value={2}>Option B</Radio>
        <Radio style={radioStyle} value={3}>Option C</Radio>
        <Radio style={radioStyle} value={4}>
          More...
          {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} block={false} /> : null}
        </Radio>
      </RadioGroup>
    );
  }
}

class App extends React.Component {
	state = {
		value: 1,
	}
	onChange = (value) => {
		console.log('radio checked', value);
		this.setState({
			value: value,
		});
	}
	

	
	render() {
	 
	const options = [{
			label: <span><strong>A</strong>{this.state.value === 'A' ? <Button>test</Button> : null}</span>,
			value : 'A'
		},'B','C','D'];
	
	//return <RadioGroup options={options} onChange={this.onChange} value={this.state.value} />;
		
	  return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
    );
  }
}

ReactDOM.render(<div>
	<App />
	<hr/>
	<App2 />
	<hr/>
	<App3 />
</div>, demo);