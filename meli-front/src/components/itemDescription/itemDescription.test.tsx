import React from "react";
import { render, screen } from "@testing-library/react";
import ItemDescription from "./itemDescription";

describe("ItemDescription", () => {
  test("renderiza correctamente el título y la descripción", () => {
    const descriptionText = "Este es un excelente producto que te encantará.";

    render(<ItemDescription description={descriptionText} />);

    expect(screen.getByText("Descripción del producto")).toBeInTheDocument();

    expect(screen.getByText(descriptionText)).toBeInTheDocument();
  });

  test('no renderiza el párrafo si la descripción es undefined', () => {
    render(<ItemDescription description={undefined} />);

    expect(screen.getByText('Descripción del producto')).toBeInTheDocument();
   
    expect(screen.queryByTestId('description')).not.toBeInTheDocument(); 
  });

  test('no renderiza el párrafo si la descripción es una cadena vacía', () => {
    render(<ItemDescription description={''} />);

    expect(screen.getByText('Descripción del producto')).toBeInTheDocument();
   
    expect(screen.queryByTestId('description')).not.toBeInTheDocument(); 
  });
});
