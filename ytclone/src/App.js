import { Provider } from "react-redux";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/body/MainContainer";
import WatchPage from "./components/body/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/> 
      },
      {
        path:"/watch",
        element:<WatchPage/> 
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>

    <div className="">
      
      <Header/>     
      <RouterProvider router={appRouter}/> 
    </div>
    </Provider>
  );
}

export default App;
