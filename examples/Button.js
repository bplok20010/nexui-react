define(['../dist/rnexui'], function (_rnexui) {
    'use strict';

    ReactDOM.render(React.createElement(
        'div',
        null,
        React.createElement(
            _rnexui.Button,
            null,
            '\u786E\u5B9A'
        ),
        React.createElement(
            _rnexui.Button,
            { iconCls: 'fa fa-mouse-pointer', onClick: function onClick(e) {
                    return console.log('Clicked!', e, e.pageY, e.clientY);
                } },
            'Click me!'
        ),
        React.createElement(
            _rnexui.Button,
            { iconCls: 'fa fa-mouse-pointer', size: 'lg' },
            '\u786E\u5B9A'
        ),
        React.createElement(
            _rnexui.Button,
            { iconCls: 'fa fa-mouse-pointer', size: 'sm' },
            '\u786E\u5B9A'
        ),
        React.createElement(
            _rnexui.Button,
            { iconCls: 'fa fa-mouse-pointer', type: 'primary' },
            '\u786E\u5B9A'
        ),
        React.createElement(
            _rnexui.Button,
            { iconCls: 'fa fa-mouse-pointer', type: 'dashed' },
            '\u786E\u5B9A'
        ),
        React.createElement(
            _rnexui.Button,
            { iconCls: 'fa fa-mouse-pointer', type: 'danger' },
            '\u786E\u5B9A'
        ),
        React.createElement(
            _rnexui.Button,
            { iconCls: 'fa fa-mouse-pointer', type: 'danger', block: true },
            '\u786E\u5B9A'
        ),
        React.createElement(_rnexui.Button, { iconCls: 'fa fa-info', type: 'dashed' }),
        React.createElement(_rnexui.Button, { iconCls: 'fa fa-info' }),
        React.createElement(
            _rnexui.Button,
            { disabled: true },
            'Disabled'
        ),
        React.createElement('hr', null),
        React.createElement(
            _rnexui.ButtonGroup,
            null,
            React.createElement(
                _rnexui.Button,
                null,
                '\u786E\u5B9A'
            ),
            React.createElement(_rnexui.Button, { iconCls: 'fa fa-angle-down' })
        ),
        React.createElement(
            _rnexui.ButtonGroup,
            null,
            React.createElement(
                _rnexui.Button,
                { type: 'primary' },
                '\u786E\u5B9A'
            ),
            React.createElement(_rnexui.Button, { type: 'primary', iconCls: 'fa fa-angle-down' })
        )
    ), demo);
});