const heading = React.createElement("div", {id :"parent"}, [ React.createElement("div", {id :"child1"},  React.createElement("h1", {id :"parent"},"child 1 heading1" )), React.createElement("div", {id :"child2"}, React.createElement("h1", {id :"child2 heading"},"child 2 heading" ) )]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);