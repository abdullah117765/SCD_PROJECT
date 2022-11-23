import {
    BrowserRouter,
  } from "react-router-dom";
  import Signup from "./pages/credentials/Signup.jsx";
import {render,screen} from "@testing-library/react"

test('signup',async () => {
   await render(
    <BrowserRouter>
    <Signup />
    </BrowserRouter>);
    // const linkElement = screen.getByTestId("dashboard");
    // expect(linkElement).toHaveTextContent('Dashboard');
  });