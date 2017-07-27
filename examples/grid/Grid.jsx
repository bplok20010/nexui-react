import { Row,Button,Col } from '../../dist/rnexui';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
		<Row>
		  <Col span={12}>col-12</Col>
		  <Col span={12}>col-12</Col>
		</Row>
		<Row>
		  <Col span={8}>col-8</Col>
		  <Col span={8}>col-8</Col>
		  <Col span={8}>col-8</Col>
		</Row>
		<Row>
		  <Col span={6}>col-6</Col>
		  <Col span={6}>col-6</Col>
		  <Col span={6}>col-6</Col>
		  <Col span={6}>col-6</Col>
		</Row>
		<Row gutter={5}>
		  <Col className="gutter-row" span={6}>
			<div className="gutter-box">col-6</div>
		  </Col>
		  <Col className="gutter-row" span={6}>
			<div className="gutter-box">col-6</div>
		  </Col>
		  <Col className="gutter-row" span={6}>
			<div className="gutter-box">col-6</div>
		  </Col>
		  <Col className="gutter-row" span={6}>
			<div className="gutter-box">col-6</div>
		  </Col>
		</Row>
		<Row>
		  <Col span={8}>col-8</Col>
		  <Col span={8} offset={8}>col-8</Col>
		</Row>
		<Row>
		  <Col span={6} offset={6}>col-6 col-offset-6</Col>
		  <Col span={6} offset={6}>col-6 col-offset-6</Col>
		</Row>
		<Row>
		  <Col span={12} offset={6}>col-12 col-offset-6</Col>
		</Row>
	  </div>
    );
  }
}

ReactDOM.render(<App/>, demo);