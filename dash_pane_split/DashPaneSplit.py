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

- containerStyle (default {    position: "relative",    width: "100%",    height: "100%",    overflow: "hidden",}):
    The container style.

- mainChildren (a list of or a singular dash component, string or number; default 'Main'):
    The main children.

- mainStyle (default {    overflow: "hidden",}):
    The main panel style.

- panelOrder (a value equal to: 'mainFirst', 'sidebarFirst'; default 'mainFirst'):
    The panel order, mainFirst or sidebarFirst, default is mainFirst.

- sidebarActionStyle (optional):
    The sidebar action style, default is {}, merge with default style.

- sidebarChildren (a list of or a singular dash component, string or number; default 'Sidebar'):
    The sidebar children.

- sidebarColloapsedFontSize (number; default 16):
    The sidebar colloapsed font size, default is 16.

- sidebarColloapsedSize (number; default 18):
    The sidebar colloapsed size, default is 18.

- sidebarDefaultSize (number; default 250):
    The default sidebar size (only use when expand click), default is
    250.

- sidebarMaxSize (number; default 0):
    The sidebar max draggable size.

- sidebarMinSize (number; optional):
    The sidebar min draggable size.

- sidebarSize (number; optional):
    The init sidebar size, default is 250.

- sidebarStyle (default {    overflow: "scroll",}):
    The sidebar panel style.

- sidebarTitle (string; default 'Sidebar'):
    The sidebar title, default is Sidebar.

- splitMode (a value equal to: 'vertical', 'horizontal'; default 'vertical'):
    The split mode, vertical or horizontal, default is vertical."""
    _children_props = ['mainChildren', 'sidebarChildren']
    _base_nodes = ['mainChildren', 'sidebarChildren', 'children']
    _namespace = 'dash_pane_split'
    _type = 'DashPaneSplit'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, sidebarMaxSize=Component.UNDEFINED, sidebarColloapsedSize=Component.UNDEFINED, sidebarColloapsedFontSize=Component.UNDEFINED, sidebarActionStyle=Component.UNDEFINED, sidebarMinSize=Component.UNDEFINED, sidebarDefaultSize=Component.UNDEFINED, sidebarSize=Component.UNDEFINED, sidebarTitle=Component.UNDEFINED, panelOrder=Component.UNDEFINED, splitMode=Component.UNDEFINED, mainChildren=Component.UNDEFINED, sidebarChildren=Component.UNDEFINED, mainStyle=Component.UNDEFINED, sidebarStyle=Component.UNDEFINED, containerStyle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'containerStyle', 'mainChildren', 'mainStyle', 'panelOrder', 'sidebarActionStyle', 'sidebarChildren', 'sidebarColloapsedFontSize', 'sidebarColloapsedSize', 'sidebarDefaultSize', 'sidebarMaxSize', 'sidebarMinSize', 'sidebarSize', 'sidebarStyle', 'sidebarTitle', 'splitMode']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'containerStyle', 'mainChildren', 'mainStyle', 'panelOrder', 'sidebarActionStyle', 'sidebarChildren', 'sidebarColloapsedFontSize', 'sidebarColloapsedSize', 'sidebarDefaultSize', 'sidebarMaxSize', 'sidebarMinSize', 'sidebarSize', 'sidebarStyle', 'sidebarTitle', 'splitMode']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DashPaneSplit, self).__init__(**args)
