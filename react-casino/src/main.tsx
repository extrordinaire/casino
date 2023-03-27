import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  LoaderFunctionArgs,
  redirect,
  RouterProvider
} from "react-router-dom"
import "./index.css"
import Home from "./routes/Home"
import Login from "./routes/Login"

async function session_loader({ request, params }: LoaderFunctionArgs) {
  const token = localStorage.getItem("sessionToken")

  if (!token) {
    return redirect("/login")
  }

  console.log(token)
  return null
}

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Home />} loader={session_loader}>
//       <Route path="/login" element={<Login />} />
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: session_loader
  },
  {
    path: "login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="m-0 h-screen w-screen p-0">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
