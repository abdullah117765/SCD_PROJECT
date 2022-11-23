import {
    BrowserRouter,
  } from "react-router-dom";
  import FormInput from "./components/textbox/FormInput";
import {render,screen} from "@testing-library/react"

test('text',async () => {
   await render(
    <BrowserRouter>
    <FormInput/>
    </BrowserRouter>);
    // const linkElement = screen.getByTestId("dashboard");
    // expect(linkElement).toHaveTextContent('Dashboard');
  });