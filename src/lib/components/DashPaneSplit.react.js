import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import SplitPane, { Pane, SashContent } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import "./style.css";

const defaultContainerStyle = {
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
    const { setProps, resizerSize, sidebarSize, sidebarDefaultSize, sidebarMaxSize, panelOrder, splitMode, mainChildren, sidebarChildren, mainStyle, sidebarStyle, containerStyle } = props;
    const sizes = (panelOrder === "mainFirst" ? ["auto", sidebarSize || sidebarDefaultSize] : [sidebarSize || sidebarDefaultSize, "auto"]);
    const safeSize = 15;
    const rSidebarStyle = Object.assign({}, sidebarStyle);
    if (sidebarSize && (sidebarSize <= safeSize)) {
        rSidebarStyle.display = "none";
    }

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

    return (
        <SplitPane
            split={splitMode}
            sizes={sizes}
            onChange={(trySizes) => {
                if (trySizes[sidebarPanelIndex] <= safeSize) {
                    trySizes[sidebarPanelIndex] = safeSize;
                } else if (sidebarMaxSize > 0 && trySizes[sidebarPanelIndex] > sidebarMaxSize) {
                    trySizes[sidebarPanelIndex] = sidebarMaxSize;
                }
                setProps({ sidebarSize: trySizes[sidebarPanelIndex] });
            }}
            style={containerStyle}
            resizerSize={1}
            sashRender={(index, active) => (
                <SashContent className={"action-sash-wrap pane-" + splitMode + " pane-" + panelOrder}>
                    <span
                        className="action"
                        onClick={() => {
                            const newSizes = [...sizes];
                            newSizes[sidebarPanelIndex] = newSizes[sidebarPanelIndex] <= safeSize ? sidebarDefaultSize : safeSize
                            setProps({ sidebarSize: newSizes[sidebarPanelIndex] });
                        }}
                    >
                        {sizes[sidebarPanelIndex] <= safeSize ? (splitMode === "vertical" ? (
                            panelOrder === "mainFirst" ? "<" : ">") : (
                            panelOrder === "mainFirst" ? "⌃" : "⌄")) : (splitMode === "vertical" ? (
                                panelOrder === "mainFirst" ? ">" : "<") : (
                                panelOrder === "mainFirst" ? "⌄" : "⌃"))}
                    </span>
                </SashContent>
            )}
        >
            {panels}

        </SplitPane>
    );
}

DashPaneSplit.defaultProps = {
    sidebarDefaultSize: 250,
    sidebarMaxSize: 0,
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

    sidebarMaxSize: PropTypes.number,

    sidebarDefaultSize: PropTypes.number,

    sidebarSize: PropTypes.number,

    panelOrder: PropTypes.oneOf(['mainFirst', 'sidebarFirst']),

    splitMode: PropTypes.oneOf(['vertical', 'horizontal']),

    mainChildren: PropTypes.node.isRequired,

    sidebarChildren: PropTypes.node.isRequired,

    mainStyle: stylePropType,

    sidebarStyle: stylePropType,

    containerStyle: stylePropType,

    setProps: PropTypes.func
};
