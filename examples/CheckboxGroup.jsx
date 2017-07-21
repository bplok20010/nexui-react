import { Checkbox, CheckboxGroup, Input } from '../dist/rnexui';
import React from 'react';


function _onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class App extends React.Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };
  render() {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
      </div>
    );
  }
  onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }
  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }
}


function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

const CStyle = {
	lineHeight : '26px',
	height : 26	
};

ReactDOM.render(
  <div>
    <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
    <br />
    <CheckboxGroup options={options} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={onChange} />
	<hr />
	<App />
	<hr />
	<CheckboxGroup onChange={_onChange} >
      <Checkbox style={CStyle} value="A">A</Checkbox>
      <Checkbox style={CStyle} value="B">B</Checkbox>
      <Checkbox style={CStyle} value="C">C</Checkbox>
      <Checkbox style={CStyle} value="D">D</Checkbox>
      <Checkbox style={CStyle} value="E">E <Input block={false} defaultValue='EEE' /></Checkbox>
    </CheckboxGroup>
  </div>
, demo);