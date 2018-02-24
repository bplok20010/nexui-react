import { 
	Steps 
} from '../../dist/rnexui';
import React, { Component } from 'react';
import ReactDOM, { createPortal, findDOMNode } from 'react-dom';

class StepsExample extends React.Component {

  render() {
    return (
      <Steps current={2} type="breadcrumb" >
        <Steps.Step title="登录有赞账号" />
        <Steps.Step title="选择门店" />
        <Steps.Step title="绑定门店" />
        <Steps.Step title="完成" />
      </Steps>
    );
  }
}

ReactDOM.render(<StepsExample/>, demo);
