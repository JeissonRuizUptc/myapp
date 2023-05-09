import { render , screen, fireEvent} from "@testing-library/react";
import FormLogin from "../components/FormLogin";


describe("Login", () => {
  test("Carga de componentes", () => {
    render(<FormLogin />);
    const labelsForm = screen.getByRole("form");
    const buttonActive = screen.getByRole("input",  {name: "submit"});
    
    fireEvent.change(labelsForm, {target: {value: "Hello World"}});
    fireEvent.click(buttonActive);

    const updateText = screen.getByText("Hello World");

    expect(updateText).toBeInTheDocument();
  });
});