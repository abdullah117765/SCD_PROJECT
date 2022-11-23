import {
    BrowserRouter,
  } from "react-router-dom";
  import Header from "./components/header/Header";
import {render,screen} from "@testing-library/react"

test('profile',async () => {
   await render(
    <BrowserRouter>
    <Header/>
    </BrowserRouter>);
    // const linkElement = screen.getByTestId("dashboard");
    // expect(linkElement).toHaveTextContent('Dashboard');
  });