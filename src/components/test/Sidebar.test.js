import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../Sidebar";
import useAuth from "../../hooks/useAuth";

jest.mock("../../hooks/useAuth", () => ({
  __esModule: true,
  default: jest.fn(),
}));

it("show username", () => {
  useAuth.mockImplementation(() => ({
    auth: {
      nombre: "Juan",
    },
  }));
  const { getByText } = render(
    <MemoryRouter>
      <Sidebar />
    </MemoryRouter>
  );
  const nombreUsuario = getByText("Hola: Juan");
  expect(nombreUsuario).toBeInTheDocument();
});
