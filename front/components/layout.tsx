import { Container, Navbar } from "react-bootstrap";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Simple Tools</Navbar.Brand>
          <div style={{ display: "flex" }}>
            <div style={{ padding: "0 16px 0 0", color: "white" }}>
              Copyright @ rollrat. 2022.
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
