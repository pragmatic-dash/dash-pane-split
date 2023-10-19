import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import SplitPane, { Pane, SashContent } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import "./style.css";

const defaultContainerStyle = {
    backgroundColor: "grey",
};

const defaultPanelStyle = {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default function DashPaneSplit(props) {
    const { resizerSize, sidebarSize, panelOrder, splitMode, mainChildren, sidebarChildren, mainStyle, sidebarStyle, containerStyle } = props;
    const [sizes, setSizes] = useState(panelOrder === "mainFirst" ? ["auto", sidebarSize] : [sidebarSize, "auto"]);
    const [sidebarDisplay, setDisplay] = useState(sidebarStyle.display || "block");
    const defaultSidebarDisplay = sidebarStyle.display || "block";

    const rSidebarStyle = Object.assign({}, sidebarStyle);
    rSidebarStyle.display = sidebarDisplay;
    const rMainStyle = Object.assign({}, mainStyle);
    const mainPanel = <Pane style={rMainStyle} key="main">
        {mainChildren}
    </Pane>
    const sidebarPanel = <Pane style={rSidebarStyle} key="sidebar">
        {sidebarChildren}
    </Pane>
    let panels, sidebarPanelIndex;

    if (panelOrder === 'mainFirst') {
        sidebarPanelIndex = 1;
        panels = [mainPanel, sidebarPanel];
    } else {
        sidebarPanelIndex = 0;
        panels = [sidebarPanel, mainPanel];
    }
    const safeSize = resizerSize;
    return (
        <SplitPane
            split={splitMode}
            sizes={sizes}
            onChange={setSizes}
            style={containerStyle}
            resizerSize={resizerSize}
            sashRender={(index, active) => (
                <SashContent className={"action-sash-wrap " + splitMode}>
                    <span
                        className="action"
                        onClick={() => {
                            const newSizes = [...sizes];
                            newSizes[sidebarPanelIndex] = newSizes[sidebarPanelIndex] <= safeSize ? sidebarSize : safeSize
                            if (newSizes[sidebarPanelIndex] === safeSize) {
                                setDisplay("none");
                            } else {
                                setDisplay(defaultSidebarDisplay);
                            }
                            setSizes(newSizes);
                        }}
                    >
                        {sizes[sidebarPanelIndex] <= safeSize ? (splitMode === "vertical" ? (
                            panelOrder === "mainFirst" ? ">" : "<") : (
                            panelOrder === "mainFirst" ? "⌄" : "⌃")) : (splitMode === "vertical" ? (
                                panelOrder === "mainFirst" ? "<" : ">") : (
                                panelOrder === "mainFirst" ? "⌃" : "⌄"))}
                    </span>
                </SashContent>
            )}
        >
            {panels}

        </SplitPane>
    );
}

DashPaneSplit.defaultProps = {
    sidebarSize: 250,
    panelOrder: 'mainFirst',
    splitMode: 'vertical',
    mainChildren: 'Main',
    sidebarChildren: 'Sidebar',
    mainStyle: defaultPanelStyle,
    sidebarStyle: defaultPanelStyle,
    containerStyle: defaultContainerStyle,
    resizerSize: 10,
};

DashPaneSplit.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    resizerSize: PropTypes.number,

    sidebarSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

    panelOrder: PropTypes.oneOf(['mainFirst', 'sidebarFirst']),

    splitMode: PropTypes.oneOf(['vertical', 'horizontal']),

    mainChildren: PropTypes.node.isRequired,

    sidebarChildren: PropTypes.node.isRequired,

    mainStyle: stylePropType,

    sidebarStyle: stylePropType,

    containerStyle: stylePropType,

    setProps: PropTypes.func
};
