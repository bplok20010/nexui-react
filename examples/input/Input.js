define(["../../dist/rnexui"], function (_rnexui) {
	"use strict";

	ReactDOM.render(React.createElement(
		"div",
		null,
		React.createElement(_rnexui.Input, { addonBefore: "test...", style: { width: 200 }, placeholder: "\u8BF7\u8F93\u5165...", ref: function ref(Input) {
				return Input.focus();
			}, onPressEnter: function onPressEnter() {
				return console.log('enter');
			} }),
		React.createElement(_rnexui.Input, { inline: false, addonAfter: "test...", onChange: function onChange(v) {
				return console.log(v);
			}, onFocus: function onFocus() {
				return console.log('focus...');
			} }),
		React.createElement(_rnexui.Input, { type: "textarea", defaultValue: "test", onChange: function onChange(v) {
				return console.log(v);
			}, style: { width: 200, height: 200 } }),
		React.createElement(_rnexui.Input, { type: "hidden", value: "test" }),
		React.createElement(
			_rnexui.InputGroup,
			{ size: "small" },
			React.createElement(_rnexui.Input, { style: { width: 50 } }),
			React.createElement(_rnexui.Input, { style: { width: 50 } }),
			React.createElement(_rnexui.Input, { style: { width: 50 } }),
			React.createElement(_rnexui.Input, { style: { width: 50 } })
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