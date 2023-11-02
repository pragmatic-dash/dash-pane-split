from dash_pane_split import DashPaneSplit
from dash import Dash, callback, html, Input, Output, no_update, State

app = Dash(__name__)

defaultPanelStyle = {
    "height": "100%",
    "width": "100%",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
}
mainPanelStyle = {
    **defaultPanelStyle,
    "backgroundColor": "red",
}

app.layout = html.Div(
    [
        DashPaneSplit(
            splitMode="vertical",
            panelOrder="sidebarFirst",
            sidebarDefaultSize=200,
            sidebarChildren=html.Div("Left Panel"),
            mainStyle=defaultPanelStyle,
            sidebarStyle=defaultPanelStyle,
            mainChildren=DashPaneSplit(
                mainStyle=defaultPanelStyle,
                sidebarStyle=defaultPanelStyle,
                splitMode="vertical",
                sidebarDefaultSize=200,
                panelOrder="mainFirst",
                sidebarChildren=html.Div("Right Panel"),
                mainChildren=DashPaneSplit(
                    splitMode="horizontal",
                    mainStyle=defaultPanelStyle,
                    sidebarStyle=defaultPanelStyle,
                    sidebarDefaultSize=200,
                    panelOrder="mainFirst",
                    sidebarChildren=html.Div("Bottom Panel"),
                    mainChildren=DashPaneSplit(
                        splitMode="horizontal",
                        mainStyle=mainPanelStyle,
                        sidebarStyle=defaultPanelStyle,
                        sidebarDefaultSize=200,
                        panelOrder="sidebarFirst",
                        sidebarChildren=html.Div("Bottom Panel"),
                        mainChildren=html.Div(
                            [
                                html.P("Main Panel"),
                                html.Button("Mini", id="mini"),
                                html.Button("Expand", id="button"),
                                html.Button("Expand if need", id="expand2"),
                            ]
                        ),
                    ),
                ),
            ),
            id="pane-split",
        ),
        html.Div(id="output"),
    ],
    style={"height": "100vh"},
)


@callback(Output("output", "children"), Input("pane-split", "sidebarSize"))
def update_split_mode(size):
    return str(size)


@callback(
    Output("pane-split", "sidebarSize"),
    Input("button", "n_clicks"),
    prevent_initial_call=True,
)
def boo(n):
    return 200


@callback(
    Output("pane-split", "sidebarSize", allow_duplicate=True),
    Input("mini", "n_clicks"),
    prevent_initial_call=True,
)
def boo2(n):
    return 15


@callback(
    Output("pane-split", "sidebarSize", allow_duplicate=True),
    Input("expand2", "n_clicks"),
    State("pane-split", "sidebarSize"),
    prevent_initial_call=True,
)
def boo3(n, current):
    if current is None:
        return 200
    if current <= 200:
        return 200
    return no_update


if __name__ == "__main__":
    app.run_server(debug=True)
