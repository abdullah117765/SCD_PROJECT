import {
    BrowserRouter,
  } from "react-router-dom";
  import Signin from "./pages/credentials/Signin.jsx";
import {render,screen} from "@testing-library/react"

test('signin',async () => {
   await render(
    <BrowserRouter>
    <Signin />
    </BrowserRouter>);
    // const linkElement = screen.getByTestId("dashboard");
    // expect(linkElement).toHaveTextContent('Dashboard');
  });