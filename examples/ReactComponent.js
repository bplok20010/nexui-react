define([], function () {
	'use strict';

	var App = Nex.declare('App', Nex.ReactComponent, {
		render: function render() {
			console.log(this.config.a, this.props.a, this.state.a);
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Hello',
					this.state.a++
				),
				React.createElement(
					'div',
					null,
					'\u6D4B\u8BD5...'
				)
			);
		}
	});

	setInterval(function () {
		ReactDOM.render(React.createElement(
			'div',
			null,
			React.createElement(App, { a: '1' })
		), demo);
	}, 1000);
});