import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Container from "../../components/Container";

import styled from "styled-components";

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`

const Spacer = styled.div`
  min-height: 100%;
`

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <LayoutGrid>
        <SideBar />
        <Spacer />
        <div>
          <Container>{children}</Container>
        </div>
      </LayoutGrid>
    </>
  );
}
