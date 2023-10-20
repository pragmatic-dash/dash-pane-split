/* eslint no-magic-numbers: 0 */
import React, { Component } from 'react';

import { DashPaneSplit } from '../lib';

class App extends Component {

    constructor(props) {
        super(props);
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <DashPaneSplit
                    splitMode={"vertical"}
                    panelOrder={"sidebarFirst"}
                    setProps={this.setProps}
                    sidebarChildren={<div>Left Panel</div>}
                    mainChildren={
                        <DashPaneSplit
                            splitMode={"vertical"}
                            panelOrder={"mainFirst"}
                            setProps={this.setProps}
                            sidebarChildren={<div>Right Panel</div>}
                            mainChildren={
                                <DashPaneSplit
                                splitMode={"horizontal"}
                                panelOrder={"mainFirst"}
                                setProps={this.setProps}
                                sidebarChildren={<div>Bottom Panel</div>}
                                mainChildren={
                                    <div>Main Panel</div>
                                }
                            />
                            }
                        />
                    }
                />
            </div>
        )
    }
}

export default App;
