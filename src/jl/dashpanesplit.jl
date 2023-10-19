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
- `resizerSize` (Real; optional)
- `sidebarChildren` (a list of or a singular dash component, string or number; optional)
- `sidebarSize` (String | Real; optional)
- `sidebarStyle` (optional)
- `splitMode` (a value equal to: 'vertical', 'horizontal'; optional)
"""
function dashpanesplit(; kwargs...)
        available_props = Symbol[:id, :containerStyle, :mainChildren, :mainStyle, :panelOrder, :resizerSize, :sidebarChildren, :sidebarSize, :sidebarStyle, :splitMode]
        wild_props = Symbol[]
        return Component("dashpanesplit", "DashPaneSplit", "dash_pane_split", available_props, wild_props; kwargs...)
end
