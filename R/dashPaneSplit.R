# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashPaneSplit <- function(id=NULL, containerStyle=NULL, mainChildren=NULL, mainStyle=NULL, panelOrder=NULL, resizerSize=NULL, sidebarChildren=NULL, sidebarSize=NULL, sidebarStyle=NULL, splitMode=NULL) {
    
    props <- list(id=id, containerStyle=containerStyle, mainChildren=mainChildren, mainStyle=mainStyle, panelOrder=panelOrder, resizerSize=resizerSize, sidebarChildren=sidebarChildren, sidebarSize=sidebarSize, sidebarStyle=sidebarStyle, splitMode=splitMode)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashPaneSplit',
        namespace = 'dash_pane_split',
        propNames = c('id', 'containerStyle', 'mainChildren', 'mainStyle', 'panelOrder', 'resizerSize', 'sidebarChildren', 'sidebarSize', 'sidebarStyle', 'splitMode'),
        package = 'dashPaneSplit'
        )

    structure(component, class = c('dash_component', 'list'))
}
