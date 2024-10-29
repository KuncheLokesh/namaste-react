// const heading = React.createElement("div", {id :"parent1"}, [ React.createElement("div", {id :"child1"},  React.createElement("h1", {id :"parent"},"child 1 heading1" )), React.createElement("div", {id :"child2"}, React.createElement("h1", {id :"child2 heading"},"child 2 heading" ) )]);
import '../index.css';
import { LOGO_URL } from './utils/constant';
import ResObj from './utils/SampleData';
import Header from './components/Header';
import Body from './components/Body';
// import { createRoot } from 'react-dom/client';

const AppLayout=()=>{
   return  (
    <div className="app">
        <Header/>
        <Body/>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);