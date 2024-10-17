import React, { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import "./categoriesBreadCrumb.scss";

interface CategoryBreadcrumbProps {
  categories: string[] | undefined;
}

function CategoryBreadcrumb({ categories }: CategoryBreadcrumbProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  if (!categories || categories.length === 0) {
    return null;
  }


  if(!isMobile){
    return (
      <Breadcrumb className="categories-breadcrumb" separator=">">
        {categories.map((category, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink>{category}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    );
  } else {
    return null
  }
}

export default CategoryBreadcrumb;
