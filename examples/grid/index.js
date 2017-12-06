define(['../../dist/rnexui'], function (_rnexui) {
  'use strict';

  ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(
      _rnexui.Row,
      { gutter: 8 },
      React.createElement(
        _rnexui.Col,
        { span: 12 },
        React.createElement(
          'div',
          null,
          'col-12'
        )
      ),
      React.createElement(
        _rnexui.Col,
        { span: 12 },
        React.createElement(
          'div',
          null,
          'col-12'
        )
      )
    ),
    React.createElement(
      _rnexui.Row,
      null,
      React.createElement(
        _rnexui.Col,
        { span: 8 },
        'col-8'
      ),
      React.createElement(
        _rnexui.Col,
        { span: 8 },
        'col-8'
      ),
      React.createElement(
        _rnexui.Col,
        { span: 8 },
        'col-8'
      )
    ),
    React.createElement(
      _rnexui.Row,
      null,
      React.createElement(
        _rnexui.Col,
        { span: 6 },
        'col-6'
      ),
      React.createElement(
        _rnexui.Col,
        { span: 6 },
        'col-6'
      ),
      React.createElement(
        _rnexui.Col,
        { span: 6 },
        'col-6'
      ),
      React.createElement(
        _rnexui.Col,
        null,
        'col-?'
      )
    )
  ), demo);
});