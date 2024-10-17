import React from "react";
import { render, screen } from "@testing-library/react";
import CategoryBreadcrumb from "./categoriesBreadCrumb";

describe("CategoryBreadcrumb", () => {

  test("No renderiza cuando las categorías están vacías", () => {
    render(<CategoryBreadcrumb categories={[]} />);
    expect(screen.queryByText('Electronica')).not.toBeInTheDocument();
  });

  test("no renderiza cuando es móvil", () => {
    // Simula una ventana pequeña
    window.innerWidth = 500;
    window.dispatchEvent(new Event("resize"));

    const categories = ['Electronica', 'Laptops', 'Gaming Laptops'];
    render(<CategoryBreadcrumb categories={categories} />);

    expect(screen.queryByText('Electronica')).not.toBeInTheDocument();
  });
});
