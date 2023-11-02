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
    const { setProps, sidebarSize, sidebarActionStyle, sidebarColloapsedSize, sidebarColloapsedFontSize, sidebarMinSize, sidebarTitle, sidebarDefaultSize, sidebarMaxSize, panelOrder, splitMode, mainChildren, sidebarChildren, mainStyle, sidebarStyle, containerStyle } = props;
    let aSidebarSize = sidebarSize || sidebarDefaultSize;
    if (aSidebarSize <= sidebarColloapsedSize) {
        aSidebarSize = sidebarColloapsedSize;
    }
    const sizes = (panelOrder === "mainFirst" ? ["auto", aSidebarSize || sidebarDefaultSize] : [aSidebarSize || sidebarDefaultSize, "auto"]);
    const safeSize = sidebarColloapsedSize;
    let rSidebarMinSize = sidebarMinSize || safeSize;
    if (sidebarMaxSize > 0 && rSidebarMinSize > sidebarMaxSize) {
        rSidebarMinSize = sidebarMaxSize;
    }
    const rSidebarStyle = Object.assign({}, sidebarStyle);
    let showSidebarTitle = false;
    if (aSidebarSize && (aSidebarSize <= safeSize)) {
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
        fontSize: `${sidebarColloapsedFontSize}px`,
        display: (showSidebarTitle ? "inline-block" : "none"),
    }

    const sidebarCollporateStyle = Object.assign({}, {
        cursor: "pointer",
        width: `${sidebarColloapsedFontSize}px`,
        marginRight: `${sidebarColloapsedFontSize}px`,
        zIndex: 2,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: `{sidebarColloapsedSize}px`,
        color: "rgba(0, 0, 0, .5)",
        fontSize: `${sidebarColloapsedFontSize}px`,
    }, sidebarActionStyle);

    if (panelOrder === 'mainFirst') {
        sidebarCollporateStyle.marginLeft = `${sidebarColloapsedFontSize * 2}px`;
    }
    if (splitMode === 'horizontal') {
        sidebarCollporateStyle.height = `${sidebarColloapsedFontSize}px`;
        sidebarCollporateStyle.width = `${sidebarColloapsedFontSize * 2}px`;

        sidebarCollporateStyle.marginLeft = "0px";
        sidebarCollporateStyle.marginRight = "0px";
        sidebarCollporateStyle.alignItems = "baseline";
        if (panelOrder === 'mainFirst') {
            sidebarCollporateStyle.marginTop = `${sidebarColloapsedFontSize}px`;
            if (!showSidebarTitle) {
                sidebarCollporateStyle.transform = "rotate(-180deg)";

            }
        } else {
            sidebarCollporateStyle.marginBottom = `${sidebarColloapsedFontSize}px`;
            if (showSidebarTitle) {
                sidebarCollporateStyle.transform = "rotate(-180deg)";
            }
        }
    }


    if (splitMode === 'vertical') {
        sidebarTitleStyle.top = "30px";
        sidebarTitleStyle.writingMode = (panelOrder === 'mainFirst' ? "vertical-lr" : "vertical-rl");
        if (panelOrder === 'mainFirst') {
            sidebarTitleStyle.left = "0px";
        } else {
            sidebarTitleStyle.right = "0px";
        }
    } else {
        sidebarTitleStyle.right = "30px";
        if (panelOrder === 'mainFirst') {
            sidebarTitleStyle.top = "0px";
        } else {
            sidebarTitleStyle.bottom = "0px";
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
                if (trySizes[sidebarPanelIndex] <= rSidebarMinSize) {
                    if (trySizes[sidebarPanelIndex] > aSidebarSize) {
                        trySizes[sidebarPanelIndex] = rSidebarMinSize;
                    } else {
                        trySizes[sidebarPanelIndex] = safeSize;
                    }
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
                        className="react-pane-split-action"
                        onClick={() => {
                            const newSizes = [...sizes];
                            newSizes[sidebarPanelIndex] = newSizes[sidebarPanelIndex] <= safeSize ? sidebarDefaultSize : safeSize
                            setProps({ sidebarSize: newSizes[sidebarPanelIndex] });
                        }}
                        style={sidebarCollporateStyle}
                    >
                        {sizes[sidebarPanelIndex] <= safeSize ? (splitMode === "vertical" ? (
                            panelOrder === "mainFirst" ? "<" : ">") : (
                            panelOrder === "mainFirst" ? "⌃" : "⌃")) : (splitMode === "vertical" ? (
                                panelOrder === "mainFirst" ? ">" : "<") : (
                                panelOrder === "mainFirst" ? "⌃" : "⌃"))}
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
    sidebarColloapsedSize: 18,
    sidebarColloapsedFontSize: 16,
    sidebarMaxSize: 0,
    panelOrder: 'mainFirst',
    splitMode: 'vertical',
    mainChildren: 'Main',
    sidebarChildren: 'Sidebar',
    sidebarTitle: 'Sidebar',
    mainStyle: defaultMainPanelStyle,
    sidebarStyle: defaultSidebarPanelStyle,
    containerStyle: defaultContainerStyle,
    sidebarActionStyle: {},
};

DashPaneSplit.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    sidebarMaxSize: PropTypes.number,

    sidebarColloapsedSize: PropTypes.number,

    sidebarColloapsedFontSize: PropTypes.number,

    sidebarActionStyle: stylePropType,

    sidebarMinSize: PropTypes.number,

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
