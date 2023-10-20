# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashPaneSplit(Component):
    """A DashPaneSplit component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- containerStyle (default {})

- mainChildren (a list of or a singular dash component, string or number; default 'Main')

- mainStyle (default {    height: "100%",    width: "100%",    display: "flex",    alignItems: "center",    justifyContent: "center",})

- panelOrder (a value equal to: 'mainFirst', 'sidebarFirst'; default 'mainFirst')

- resizerSize (number; default 10)

- sidebarChildren (a list of or a singular dash component, string or number; default 'Sidebar')

- sidebarDefaultSize (number; default 250)

- sidebarMaxSize (number; default 0)

- sidebarSize (number; optional)

- sidebarStyle (default {    height: "100%",    width: "100%",    display: "flex",    alignItems: "center",    justifyContent: "center",})

- splitMode (a value equal to: 'vertical', 'horizontal'; default 'vertical')"""
    _children_props = ['mainChildren', 'sidebarChildren']
    _base_nodes = ['mainChildren', 'sidebarChildren', 'children']
    _namespace = 'dash_pane_split'
    _type = 'DashPaneSplit'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, resizerSize=Component.UNDEFINED, sidebarMaxSize=Component.UNDEFINED, sidebarDefaultSize=Component.UNDEFINED, sidebarSize=Component.UNDEFINED, panelOrder=Component.UNDEFINED, splitMode=Component.UNDEFINED, mainChildren=Component.UNDEFINED, sidebarChildren=Component.UNDEFINED, mainStyle=Component.UNDEFINED, sidebarStyle=Component.UNDEFINED, containerStyle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'containerStyle', 'mainChildren', 'mainStyle', 'panelOrder', 'resizerSize', 'sidebarChildren', 'sidebarDefaultSize', 'sidebarMaxSize', 'sidebarSize', 'sidebarStyle', 'splitMode']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'containerStyle', 'mainChildren', 'mainStyle', 'panelOrder', 'resizerSize', 'sidebarChildren', 'sidebarDefaultSize', 'sidebarMaxSize', 'sidebarSize', 'sidebarStyle', 'splitMode']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DashPaneSplit, self).__init__(**args)
