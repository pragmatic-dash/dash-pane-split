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
- `containerStyle` (optional)
- `mainChildren` (a list of or a singular dash component, string or number; optional)
- `mainStyle` (optional)
- `panelOrder` (a value equal to: 'mainFirst', 'sidebarFirst'; optional)
- `sidebarChildren` (a list of or a singular dash component, string or number; optional)
- `sidebarDefaultSize` (Real; optional)
- `sidebarMaxSize` (Real; optional)
- `sidebarSize` (Real; optional)
- `sidebarStyle` (optional)
- `sidebarTitle` (String; optional)
- `splitMode` (a value equal to: 'vertical', 'horizontal'; optional)
"""
function dashpanesplit(; kwargs...)
        available_props = Symbol[:id, :containerStyle, :mainChildren, :mainStyle, :panelOrder, :sidebarChildren, :sidebarDefaultSize, :sidebarMaxSize, :sidebarSize, :sidebarStyle, :sidebarTitle, :splitMode]
        wild_props = Symbol[]
        return Component("dashpanesplit", "DashPaneSplit", "dash_pane_split", available_props, wild_props; kwargs...)
end

