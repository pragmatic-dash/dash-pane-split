from dash_pane_split import DashPaneSplit
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)

app.layout = html.Div(
    DashPaneSplit(
        splitMode="vertical",
        panelOrder="sidebarFirst",
        sidebarSize=200,
        sidebarChildren=html.Div("Left Panel"),
        mainChildren=DashPaneSplit(
            splitMode="vertical",
            sidebarSize=200,
            panelOrder="mainFirst",
            sidebarChildren=html.Div("Right Panel"),
            mainChildren=DashPaneSplit(
                splitMode="horizontal",
                sidebarSize=200,
                panelOrder="mainFirst",
                sidebarChildren=html.Div("Bottom Panel"),
                mainChildren=html.Div("Main Panel"),
            ),
        ),
    ),
    style={"height": "100vh"},
)


if __name__ == "__main__":
    app.run_server(debug=True)
