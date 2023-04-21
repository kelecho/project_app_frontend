import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Alerta from "../Alerta";

const alertaError = {
  error: true,
  msg: "mensaje de error",
};

const alertaNotError = {
  error: false,
  msg: "mensaje de error",
};

it("render alert message", () => {
  render(<Alerta alerta={alertaError} />);
  const mensaje = screen.getByText("mensaje de error");
  expect(mensaje).toBeInTheDocument();
});

it("render styles to alert message is true", () => {
  const { container } = render(<Alerta alerta={alertaError} />);
  const elementoAlerta = container.querySelector("div");
  expect(elementoAlerta).toHaveClass(
    "from-red-400 to-red-600 bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-10"
  );
});

it("render styles to alert message is false", () => {
  const { container } = render(<Alerta alerta={alertaNotError} />);
  const elementoAlerta = container.querySelector("div");
  expect(elementoAlerta).toHaveClass(
    "from-sky-400 to-sky-600 bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-10"
  );
});
