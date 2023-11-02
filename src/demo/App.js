/* eslint no-magic-numbers: 0 */
import React, { Component } from 'react';

import { DashPaneSplit } from '../lib';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarSize: 200,
            sidebarColloapsedSize: 20,
            sidebarColloapsedFontSize: 18,
        };
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
                    sidebarSize={this.state.sidebarSize}
                    sidebarColloapsedSize={this.state.sidebarColloapsedSize}
                    sidebarColloapsedFontSize={this.state.sidebarColloapsedFontSize}
                    sidebarMinSize={100}
                    setProps={this.setProps}
                    sidebarChildren={<div>Left Panel</div>}
                    mainChildren={
                        <DashPaneSplit
                            splitMode={"vertical"}
                            panelOrder={"mainFirst"}
                            sidebarActionStyle={{display: 'none'}}
                            sidebarSize={this.state.sidebarSize}
                            sidebarColloapsedSize={this.state.sidebarColloapsedSize}
                            sidebarColloapsedFontSize={this.state.sidebarColloapsedFontSize}
                            setProps={this.setProps}
                            sidebarChildren={<div>Right Panel</div>}
                            mainChildren={
                                <DashPaneSplit
                                    sidebarSize={this.state.sidebarSize}
                                    splitMode={"horizontal"}
                                    panelOrder={"mainFirst"}
                                    setProps={this.setProps}
                                    sidebarColloapsedSize={this.state.sidebarColloapsedSize}
                                    sidebarColloapsedFontSize={this.state.sidebarColloapsedFontSize}
                                    sidebarChildren={<div>Bottom Panel</div>}
                                    mainChildren={
                                        <DashPaneSplit
                                            sidebarColloapsedSize={this.state.sidebarColloapsedSize}
                                            sidebarColloapsedFontSize={this.state.sidebarColloapsedFontSize}
                                            sidebarSize={this.state.sidebarSize}
                                            splitMode={"horizontal"}
                                            panelOrder={"sidebarFirst"}
                                            setProps={this.setProps}
                                            sidebarChildren={<div>Top Panel</div>}
                                            mainChildren={
                                                <div>Main Panel</div>
                                            }
                                        />
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
