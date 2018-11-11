/**
 * Transition 改进
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import Identity from './Identity';

export default class NTransition extends Component {

    static propTypes = {
        onEnter: PropTypes.func,
        onEntered: PropTypes.func,
        onExit: PropTypes.func,
        onExited: PropTypes.func,
    }

    render() {
        const props = this.props;
        const rest = {};

        if (typeof props.children !== 'function') {

            let shouldUpdate = true;

            rest.onEnter = (...a) => {
                shouldUpdate = false;
                if (props.onEnter) {
                    props.onEnter(...a)
                }
            }

            rest.onEntered = (...a) => {
                shouldUpdate = true;
                if (props.onEntered) {
                    props.onEntered(...a)
                }
            }

            rest.onExit = (...a) => {
                shouldUpdate = false;
                if (props.onExit) {
                    props.onExit(...a)
                }
            }

            rest.onExited = (...a) => {
                shouldUpdate = true;
                if (props.onExited) {
                    props.onExited(...a)
                }
            }

            rest.children = state => {
                return <Identity shouldUpdate={shouldUpdate}>{props.children}</Identity>
            }
        }

        return <Transition {...props} {...rest} />
    }
}