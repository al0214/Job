import { RouterProvider, createBrowserRouter } from "react-router-dom";
import KanbanBoard from "./kanbanboard";
import Login from "./login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/kanban-board",
    element: <KanbanBoard />,
  },
]);

const Pages = () => {
  return <RouterProvider router={router} />;
};

export default Pages;
