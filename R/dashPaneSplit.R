# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashPaneSplit <- function(id=NULL, containerStyle=NULL, mainChildren=NULL, mainStyle=NULL, panelOrder=NULL, sidebarChildren=NULL, sidebarDefaultSize=NULL, sidebarMaxSize=NULL, sidebarMinSize=NULL, sidebarSize=NULL, sidebarStyle=NULL, sidebarTitle=NULL, splitMode=NULL) {
    
    props <- list(id=id, containerStyle=containerStyle, mainChildren=mainChildren, mainStyle=mainStyle, panelOrder=panelOrder, sidebarChildren=sidebarChildren, sidebarDefaultSize=sidebarDefaultSize, sidebarMaxSize=sidebarMaxSize, sidebarMinSize=sidebarMinSize, sidebarSize=sidebarSize, sidebarStyle=sidebarStyle, sidebarTitle=sidebarTitle, splitMode=splitMode)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashPaneSplit',
        namespace = 'dash_pane_split',
        propNames = c('id', 'containerStyle', 'mainChildren', 'mainStyle', 'panelOrder', 'sidebarChildren', 'sidebarDefaultSize', 'sidebarMaxSize', 'sidebarMinSize', 'sidebarSize', 'sidebarStyle', 'sidebarTitle', 'splitMode'),
        package = 'dashPaneSplit'
        )

    structure(component, class = c('dash_component', 'list'))
}
