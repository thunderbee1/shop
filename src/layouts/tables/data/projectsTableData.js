/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import homeDecor5 from "assets/images/home-decor-5.jpg";
import homeDecor6 from "assets/images/home-decor-6.jpeg";

export default function data() {
  const [quantities, setQuantities] = useState({
    homeDecor1: 0,
    homeDecor2: 0,
    homeDecor3: 0,
    homeDecor4: 0,
    homeDecor5: 0,
    homeDecor6: 0,
  });

  const [items, setItems] = useState([
    {
      name: "modern",
      price: "$100",
      quantity: 0,
      image: homeDecor1,
    },
    {
      name: "scandinavian",
      price: "$200",
      quantity: 0,
      image: homeDecor2,
    },
    {
      name: "minimalist",
      price: "$300",
      quantity: 0,
      image: homeDecor3,
    },
    {
      name: "gothic",
      price: "$400",
      quantity: 0,
      image: homeDecor4,
    },
    {
      name: "Arm Chair",
      price: "$400",
      quantity: 0,
      image: homeDecor5,
    },
    {
      name: "Wall Mirror",
      price: "$500",
      quantity: 0,
      image: homeDecor6,
    },
  ]);

  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="xxl" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const handleChange = (e) => {
    if (e.target.value < 0) return;
    const newQuantities = { ...quantities };
    newQuantities[e.target.name] = e.target.value;
    setQuantities(newQuantities);
  };

  const rows = items.map((item, index) => ({
    product: <Project image={item.image} name={item.name} />,
    price: (
      <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        {item.price}
      </MDTypography>
    ),
    quantity: (
      <MDInput
        style={{ width: "50%" }}
        type="number"
        value={quantities[`homeDecor${index + 1}`] || 0}
        name={`homeDecor${index + 1}`}
        size="small"
        onChange={handleChange}
      />
    ),
    action: (
      <MDButton
        color="white"
        onClick={() => {
          const newItems = [...items];
          newItems.splice(index, 1);
          setItems(newItems);
        }}
      >
        <Icon>clear</Icon>
      </MDButton>
    ),
  }));

  return {
    columns: [
      { Header: "product", accessor: "product", align: "left" },
      { Header: "price", accessor: "price", align: "left" },
      { Header: "quantity", accessor: "quantity", width: "20%", align: "left" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows,
  };
}
