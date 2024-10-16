import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import "./categoriesBreadCrumb.css"

interface CategoryBreadcrumbProps {
  categories: string[] | undefined;
}

function CategoryBreadcrumb({ categories }: CategoryBreadcrumbProps) {
  if (!categories || categories.length === 0) {
    return null;
  }
  return (
    <Breadcrumb className="categories-breadcrumb" separator=">">
      {categories.map((category, index) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink>{category}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}

export default CategoryBreadcrumb;
