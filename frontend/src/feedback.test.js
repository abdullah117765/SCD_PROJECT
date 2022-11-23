import {
    BrowserRouter,
  } from "react-router-dom";
import Feedbackfunc from "./pages/feedback.js";
import {render,screen} from "@testing-library/react"

test('feedback',async () => {
   await render(
    <BrowserRouter>
    <Feedbackfunc />
    </BrowserRouter>);
    // const linkElement = screen.getByTestId("dashboard");
    // expect(linkElement).toHaveTextContent('Dashboard');
  });