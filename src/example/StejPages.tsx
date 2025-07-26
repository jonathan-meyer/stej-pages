import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link, useLocation } from "react-router";
import Menu from "../pages/Menu";
import Page from "../pages/Page";
import Pages from "../pages/Pages";
import CodeBlock from "./CodeBlock";
import SocialIcon from "./SocialIcon";

const StejPages = () => {
  const { pathname } = useLocation();

  return (
    <Container fluid className="border p-0 h-100">
      <title>STEJ Pages</title>

      <Navbar expand="sm" sticky="top" className=" border border-success">
        <Container>
          <Navbar.Brand as={Link} to={pathname}>
            STEJ Pages
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="stej-pages-nav" />
          <Navbar.Collapse id="stej-pages-nav">
            <Nav className="me-auto">
              <Menu items={[{ label: "stej.com", path: "/" }]} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="border border-danger m-0 h-100">
        hi
        <Pages fluid>
          <Page label="One" hideFromMenu>
            <h2>Pages</h2>
            <p>
              <code>Pages</code> is a set of utility components that make using{" "}
              <a href="https://www.npmjs.com/package/@react-spring/parallax">
                @react-spring/parallax
              </a>{" "}
              easier.
            </p>
            <p>
              <CodeBlock title="MyPages.tsx" language="tsx">{`
<Pages>
  <Banner type="header">
    <Navbar>
      <Navbar.Brand as={Link} to={pathname}>
        My Cool App
      </Navbar.Brand>
      <Menu />
    </Navbar>
  </Banner>

  <Page label="One" background={{ color: "red" }}>
    <h2>One</h2>
    <p>This is the first page.</p>
  </Page>

  <Page label="Two" background={{ color: "blue" }}>
    <h2>Two</h2>
    <p>This is the second page.</p>
  </Page>

  <Banner type="footer">
    <Navbar>
      <Container>
        <Navbar.Text>Copyright &copy; 2025</Navbar.Text>
        <Stack gap={1} direction="horizontal">
          <SocialIcon variant="BuyMeCoffee" socialId="white.nerd" />
          <SocialIcon variant="GitHub" socialId="jonathan-meyer" />
          <SocialIcon variant="TwitterX" socialId="stej_dot_com" />
        </Stack>
      </Container>
    </Navbar>
  </Banner>
</Pages>
          `}</CodeBlock>
            </p>
            <Link to="#page-2">Page Two</Link>
          </Page>

          <Page label="Two" background={{ color: "blue" }}>
            <h2>Two</h2>
            <p>This is the second page.</p>
          </Page>

          <Page label="Three">
            <h2>Three</h2>
            <p>This is the 3rd page.</p>
          </Page>
        </Pages>
      </Container>

      <Navbar className=" border border-success">
        <Container>
          <Navbar.Text>Copyright &copy; 2025</Navbar.Text>
          <Stack gap={1} direction="horizontal">
            <SocialIcon variant="BuyMeCoffee" socialId="white.nerd" />
            <SocialIcon variant="GitHub" socialId="jonathan-meyer" />
            <SocialIcon variant="TwitterX" socialId="stej_dot_com" />
          </Stack>
        </Container>
      </Navbar>
    </Container>
  );
};

export default StejPages;
