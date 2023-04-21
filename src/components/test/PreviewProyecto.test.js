import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import PreviewProyecto from "../PreviewProyecto";

jest.mock("../../hooks/useAuth", () => ({
  __esModule: true,
  default: () => ({ auth: { _id: "creador-id" } }),
}));

describe("PreviewProyecto", () => {
  const proyecto = {
    _id: "proyecto-id",
    nombre: "Nombre del proyecto",
    cliente: "Cliente",
    creador: "creador-id",
  };

  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <PreviewProyecto proyecto={proyecto} />
      </BrowserRouter>
    );

    expect(screen.getByText("Nombre del proyecto")).toBeInTheDocument();
    expect(screen.getByText("Cliente")).toBeInTheDocument();
    expect(screen.getByText("Ver Proyecto")).toBeInTheDocument();
  });

  it("the link points to the correct URL", () => {
    render(
      <BrowserRouter>
        <PreviewProyecto proyecto={proyecto} />
      </BrowserRouter>
    );

    expect(screen.getByText("Ver Proyecto")).toHaveAttribute(
      "href",
      "/proyecto-id"
    );
  });
});
