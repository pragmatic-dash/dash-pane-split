# AUTO GENERATED FILE - DO NOT EDIT

export dashpanesplit

"""
    dashpanesplit(;kwargs...)

A DashPaneSplit component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `containerStyle` (optional): The container style
- `mainChildren` (a list of or a singular dash component, string or number; optional): The main children
- `mainStyle` (optional): The main panel style
- `panelOrder` (a value equal to: 'mainFirst', 'sidebarFirst'; optional): The panel order, mainFirst or sidebarFirst, default is mainFirst
- `sidebarActionStyle` (optional): The sidebar action style, default is {}, merge with default style
- `sidebarChildren` (a list of or a singular dash component, string or number; optional): The sidebar children
- `sidebarColloapsedFontSize` (Real; optional): The sidebar colloapsed font size, default is 16
- `sidebarColloapsedSize` (Real; optional): The sidebar colloapsed size, default is 18
- `sidebarDefaultSize` (Real; optional): The default sidebar size (only use when expand click), default is 250
- `sidebarMaxSize` (Real; optional): The sidebar max draggable size
- `sidebarMinSize` (Real; optional): The sidebar min draggable size
- `sidebarSize` (Real; optional): The init sidebar size, default is 250
- `sidebarStyle` (optional): The sidebar panel style
- `sidebarTitle` (String; optional): The sidebar title, default is Sidebar
- `splitMode` (a value equal to: 'vertical', 'horizontal'; optional): The split mode, vertical or horizontal, default is vertical
"""
function dashpanesplit(; kwargs...)
        available_props = Symbol[:id, :containerStyle, :mainChildren, :mainStyle, :panelOrder, :sidebarActionStyle, :sidebarChildren, :sidebarColloapsedFontSize, :sidebarColloapsedSize, :sidebarDefaultSize, :sidebarMaxSize, :sidebarMinSize, :sidebarSize, :sidebarStyle, :sidebarTitle, :splitMode]
        wild_props = Symbol[]
        return Component("dashpanesplit", "DashPaneSplit", "dash_pane_split", available_props, wild_props; kwargs...)
end

