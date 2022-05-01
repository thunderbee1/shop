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
  const [quantities, setQuantity] = useState({
    homeDecor1: 0,
    homeDecor2: 0,
    homeDecor3: 0,
    homeDecor4: 0,
    homeDecor5: 0,
    homeDecor6: 0,
  });

  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const handleChange = (e) => {
    setQuantity({ [e.target.name]: e.target.value });
  };

  return {
    columns: [
      { Header: "product", accessor: "product", align: "left" },
      { Header: "budget", accessor: "budget", align: "left" },
      { Header: "quantity", accessor: "quantity", width: "20%", align: "left" },
      { Header: "action", accessor: "action", align: "left" },
    ],

    rows: [
      {
        product: <Project image={homeDecor1} name="modern" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $100
          </MDTypography>
        ),
        quantity: (
          <MDInput
            style={{ width: "50%" }}
            type="number"
            value={quantities.homeDecor1}
            name="homeDecor1"
            size="small"
            onChange={handleChange}
          />
        ),
        action: <MDButton color="dark">Remove</MDButton>,
      },
      {
        product: <Project image={homeDecor2} name="scandinavian" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $200
          </MDTypography>
        ),
        quantity: (
          <MDInput
            style={{ width: "50%" }}
            type="number"
            value={quantities.homeDecor2}
            name="homeDecor2"
            size="small"
          />
        ),
        action: <MDButton color="dark">Remove</MDButton>,
      },
      {
        product: <Project image={homeDecor3} name="minimalist" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $300
          </MDTypography>
        ),
        quantity: (
          <MDInput
            style={{ width: "50%" }}
            type="number"
            value={quantities.homeDecor3}
            name="homeDecor3"
            size="small"
          />
        ),
        action: <MDButton color="dark">Remove</MDButton>,
      },
      {
        product: <Project image={homeDecor4} name="gothic" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $400
          </MDTypography>
        ),
        quantity: (
          <MDInput
            style={{ width: "50%" }}
            type="number"
            value={quantities.homeDecor4}
            name="homeDecor4"
            size="small"
          />
        ),
        action: <MDButton color="dark">Remove</MDButton>,
      },
      {
        product: <Project image={homeDecor5} name="Arm Chair" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $400
          </MDTypography>
        ),
        quantity: (
          <MDInput
            style={{ width: "50%" }}
            type="number"
            value={quantities.homeDecor5}
            name="homeDecor5"
            size="small"
          />
        ),
        action: <MDButton color="dark">Remove</MDButton>,
      },
      {
        product: <Project image={homeDecor6} name="Wall Mirror" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $500
          </MDTypography>
        ),
        quantity: (
          <MDInput
            style={{ width: "50%" }}
            type="number"
            value={quantities.homeDecor6}
            name="homeDecor6"
            size="small"
          />
        ),
        action: <MDButton color="dark">Remove</MDButton>,
      },
    ],
  };
}
