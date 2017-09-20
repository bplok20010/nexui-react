define(["../dist/rnexui"], function (_rnexui) {
	"use strict";

	ReactDOM.render(React.createElement(
		"div",
		null,
		React.createElement(_rnexui.Input, { addonBefore: "test...", width: "200px", ref: function ref(Input) {
				return Input.focus();
			}, onPressEnter: function onPressEnter() {
				return console.log('enter');
			} }),
		React.createElement(_rnexui.Input, { block: false, addonAfter: "test...", onChange: function onChange(v) {
				return console.log(v);
			}, onFocus: function onFocus() {
				return console.log('focus...');
			} }),
		React.createElement(_rnexui.Input, { type: "textarea", defaultValue: "test", onChange: function onChange(v) {
				return console.log(v);
			}, width: "200px", height: "150px", autosize: true }),
		React.createElement(_rnexui.Input, { type: "hidden", value: "test" }),
		React.createElement(
			_rnexui.InputGroup,
			{ size: "small" },
			React.createElement(_rnexui.Input, { width: 50 }),
			React.createElement(_rnexui.Input, { width: 50 }),
			React.createElement(_rnexui.Input, { width: 50 }),
			React.createElement(_rnexui.Input, { width: 50 })
		),
		React.createElement(
			"div",
			{ onClick: function onClick() {
					return console.log('click');
				} },
			React.createElement("input", { type: "checkbox", defaultChecked: true, onChange: function onChange(e) {
					e.preventDefault();e.stopPropagation();
				} })
		)
	), demo);
});