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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import homeDecor5 from "assets/images/home-decor-5.jpg";
import homeDecor6 from "assets/images/home-decor-6.jpeg";
// import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Dashboard() {
  const bgImage =
    "https://cityspideynews.s3.amazonaws.com/uploads/spidey/202202/home-decor-1645861106.webp";

  const collections = [
    {
      image: homeDecor1,
      title: "modern",
      description: "As Uber works through a huge amount of internal management turmoil.",
      action: {
        type: "internal",
        route: "/collection/1",
        color: "info",
        label: "Shop Now",
      },
      price: "$100",
    },
    {
      image: homeDecor2,
      title: "scandinavian",
      description: "Music is something that everyone has their own specific opinion about.",
      action: {
        type: "internal",
        route: "/collection/2",
        color: "info",
        label: "Shop Now",
      },
      price: "$200",
    },
    {
      image: homeDecor3,
      title: "minimalist",
      description: "Different people have different taste, and various types of music.",
      action: {
        type: "internal",
        route: "/collection/3",
        color: "info",
        label: "Shop Now",
      },
      price: "$300",
    },
    {
      image: homeDecor4,
      title: "gothic",
      description: "Why would anyone pick blue over pink? Pink is obviously a better color.",
      action: {
        type: "internal",
        route: "/collection/4",
        color: "info",
        label: "Shop Now",
      },
      price: "$400",
    },
    {
      image: homeDecor5,
      title: "Arm Chair",
      description: "Comfortable, cheep and stylish design.",
      action: {
        type: "internal",
        route: "/collection/5",
        color: "info",
        label: "Shop Now",
      },
      price: "$400",
    },
    {
      image: homeDecor6,
      title: "Wall Mirror",
      description: "wall mirror.",
      action: {
        type: "internal",
        route: "/collection/6",
        color: "info",
        label: "Shop Now",
      },
      price: "$500",
    },
  ];

  return (
    <DashboardLayout>
      <Container>
        <MDBox
          width="100%"
          minHeight="30vh"
          borderRadius="xl"
          my={2}
          pt={6}
          pb={28}
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              bgImage &&
              `${linearGradient(
                rgba(gradients.dark.main, 0.4),
                rgba(gradients.dark.state, 0.4)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <MDTypography color="white" variant="h1" px={10}>
            Stylish design for everyone ....
          </MDTypography>
          <MDTypography color="white" variant="h5" px={10} py={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat efficitur felis
            nec placerat. Curabitur vitae est pretium, fringilla lectus nec, varius purus.
          </MDTypography>
        </MDBox>
        <MDBox>
          <Card>
            <MDBox pt={2} px={2} lineHeight={1.25}>
              <MDTypography variant="h6" fontWeight="medium">
                Collections
              </MDTypography>
              <MDBox mb={1}>
                <MDTypography variant="button" color="text">
                  Architects design houses
                </MDTypography>
              </MDBox>
            </MDBox>
            <MDBox p={2}>
              <Grid container spacing={6}>
                {collections.map((item, index) => (
                  <Grid item xs={12} md={6} xl={3}>
                    <DefaultProjectCard
                      image={item.image}
                      label={`Theme #${index + 1}`}
                      title={item.title}
                      description={item.description}
                      action={item.action}
                      price={item.price}
                    />
                  </Grid>
                ))}
              </Grid>
            </MDBox>
          </Card>
        </MDBox>
      </Container>
    </DashboardLayout>
  );
}

export default Dashboard;
