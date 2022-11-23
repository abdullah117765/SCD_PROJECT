import {
    BrowserRouter,
  } from "react-router-dom";
  import Footer from "./components/footer/Footer";
import {render,screen} from "@testing-library/react"

test('footer',async () => {
   await render(
    <BrowserRouter>
    <Footer/>
    </BrowserRouter>);
    // const linkElement = screen.getByTestId("dashboard");
    // expect(linkElement).toHaveTextContent('Dashboard');
  });