import React, { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import Transition from './Transition';

class NCSSTransition extends CSSTransition {
    static propTypes = { ...CSSTransition.propTypes }

    render() {
        const props = { ...this.props };

        delete props.classNames;

        return (
            <Transition
                {...props}
                onEnter={this.onEnter}
                onEntered={this.onEntered}
                onEntering={this.onEntering}
                onExit={this.onExit}
                onExiting={this.onExiting}
                onExited={this.onExited}
            />
        );
    }
}

export default NCSSTransition;