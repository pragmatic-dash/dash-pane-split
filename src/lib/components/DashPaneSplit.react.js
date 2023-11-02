import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import SplitPane, { Pane, SashContent } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import "./style.css";

const defaultContainerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
}

const defaultMainPanelStyle = {
    overflow: "hidden",
}

const defaultSidebarPanelStyle = {
    overflow: "scroll",
}

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default function DashPaneSplit(props) {
    const { setProps, sidebarSize, sidebarTitle, sidebarDefaultSize, sidebarMaxSize, panelOrder, splitMode, mainChildren, sidebarChildren, mainStyle, sidebarStyle, containerStyle } = props;
    const sizes = (panelOrder === "mainFirst" ? ["auto", sidebarSize || sidebarDefaultSize] : [sidebarSize || sidebarDefaultSize, "auto"]);
    const safeSize = 15;
    const rSidebarStyle = Object.assign({}, sidebarStyle);
    let showSidebarTitle = false;
    if (sidebarSize && (sidebarSize <= safeSize)) {
        rSidebarStyle.display = "none";
        showSidebarTitle = true;
    }
    const rMainStyle = Object.assign({}, mainStyle);
    const mainPanel = <Pane style={rMainStyle} key="main">
        {mainChildren}
    </Pane>
    const sidebarPanel = <Pane style={rSidebarStyle} key="sidebar">
        {sidebarChildren}
    </Pane>
    let panels, sidebarPanelIndex;
    const sidebarTitleStyle = {
        position: "absolute",
        cursor: "pointer",
        color: "rgba(0, 0,0, 0.6)",
        fontSize: "13px",
        display: (showSidebarTitle ? "inline-block" : "none"),
    }

    if (splitMode === 'vertical') {
        sidebarTitleStyle.top = "30px";
        sidebarTitleStyle.writingMode = (panelOrder === 'mainFirst'? "vertical-lr" : "vertical-rl");
        if (panelOrder === 'mainFirst') {
            sidebarTitleStyle.left = "-2px";
        } else {
            sidebarTitleStyle.right = "-2px";
        }
    }  else {
        sidebarTitleStyle.right = "30px";
        if (panelOrder === 'mainFirst') {
            sidebarTitleStyle.top = "-2px";
        } else {
            sidebarTitleStyle.bottom = "-2px";
        }
    }

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
                    <span
                        onClick={() => {
                            const newSizes = [...sizes];
                            newSizes[sidebarPanelIndex] = newSizes[sidebarPanelIndex] <= safeSize ? sidebarDefaultSize : safeSize
                            setProps({ sidebarSize: newSizes[sidebarPanelIndex] });
                        }}
                        style={sidebarTitleStyle}
                    >{sidebarTitle}</span>
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
    sidebarTitle: 'Sidebar',
    mainStyle: defaultMainPanelStyle,
    sidebarStyle: defaultSidebarPanelStyle,
    containerStyle: defaultContainerStyle,
};

DashPaneSplit.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    sidebarMaxSize: PropTypes.number,

    sidebarDefaultSize: PropTypes.number,

    sidebarSize: PropTypes.number,

    sidebarTitle: PropTypes.string,

    panelOrder: PropTypes.oneOf(['mainFirst', 'sidebarFirst']),

    splitMode: PropTypes.oneOf(['vertical', 'horizontal']),

    mainChildren: PropTypes.node.isRequired,

    sidebarChildren: PropTypes.node.isRequired,

    mainStyle: stylePropType,

    sidebarStyle: stylePropType,

    containerStyle: stylePropType,

    setProps: PropTypes.func
};
