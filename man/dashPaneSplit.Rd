% Auto-generated: do not edit by hand
\name{dashPaneSplit}

\alias{dashPaneSplit}

\title{DashPaneSplit component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
dashPaneSplit(id=NULL, containerStyle=NULL, mainChildren=NULL,
mainStyle=NULL, panelOrder=NULL, sidebarActionStyle=NULL,
sidebarChildren=NULL, sidebarColloapsedFontSize=NULL,
sidebarColloapsedSize=NULL, sidebarDefaultSize=NULL,
sidebarMaxSize=NULL, sidebarMinSize=NULL, sidebarSize=NULL,
sidebarStyle=NULL, sidebarTitle=NULL, splitMode=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{containerStyle}{The container style}

\item{mainChildren}{A list of or a singular dash component, string or number. The main children}

\item{mainStyle}{The main panel style}

\item{panelOrder}{A value equal to: 'mainfirst', 'sidebarfirst'. The panel order, mainFirst or sidebarFirst, default is mainFirst}

\item{sidebarActionStyle}{The sidebar action style, default is {}, merge with default style}

\item{sidebarChildren}{A list of or a singular dash component, string or number. The sidebar children}

\item{sidebarColloapsedFontSize}{Numeric. The sidebar colloapsed font size, default is 16}

\item{sidebarColloapsedSize}{Numeric. The sidebar colloapsed size, default is 18}

\item{sidebarDefaultSize}{Numeric. The default sidebar size (only use when expand click), default is 250}

\item{sidebarMaxSize}{Numeric. The sidebar max draggable size}

\item{sidebarMinSize}{Numeric. The sidebar min draggable size}

\item{sidebarSize}{Numeric. The init sidebar size, default is 250}

\item{sidebarStyle}{The sidebar panel style}

\item{sidebarTitle}{Character. The sidebar title, default is Sidebar}

\item{splitMode}{A value equal to: 'vertical', 'horizontal'. The split mode, vertical or horizontal, default is vertical}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

