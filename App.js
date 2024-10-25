// const heading = React.createElement("div", {id :"parent1"}, [ React.createElement("div", {id :"child1"},  React.createElement("h1", {id :"parent"},"child 1 heading1" )), React.createElement("div", {id :"child2"}, React.createElement("h1", {id :"child2 heading"},"child 2 heading" ) )]);
const jsxheading=(<h1>namste react from the jsx 🚀
    <h2>another elemt</h2>
</h1>);

const Title=()=>{
    return  <h1>Namaste React Form Functional Component</h1>
}

const HeadingComponent=()=>{
   return  (
    <div>
        <Title/>
        <h3>Heading component</h3>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);