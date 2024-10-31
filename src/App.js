// const heading = React.createElement("div", {id :"parent1"}, [ React.createElement("div", {id :"child1"},  React.createElement("h1", {id :"parent"},"child 1 heading1" )), React.createElement("div", {id :"child2"}, React.createElement("h1", {id :"child2 heading"},"child 2 heading" ) )]);
import '../index.css';
import { LOGO_URL } from './utils/constant';
import ResObj from './utils/SampleData';
import Header from './components/Header';
import Body from './components/Body';
import ReactDOM from "react-dom/client";
import About from './components/About';
import { createBrowserRouter,RouterProvider ,Outlet} from 'react-router-dom';
import Contact from './components/Contanct';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserClassComponent from './components/UserClassComponent';



const AppLayout=()=>{
   return  (
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    )
}
const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },{
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/classcomponent",
                element:<UserClassComponent/>
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);