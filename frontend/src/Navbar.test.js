import {
    BrowserRouter,
  } from "react-router-dom";
  import Navbar from "./components/navbar/Navbar";
import {render,screen} from "@testing-library/react"

test('navbar',async () => {
   await render(
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>);
    // const linkElement = screen.getByTestId("dashboard");
    // expect(linkElement).toHaveTextContent('Dashboard');
  });