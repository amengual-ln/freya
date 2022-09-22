import { SideBar } from "../../components/SideBar";
import { Container } from "../../components/Container";

import styled from "styled-components";

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    padding: .75em;
  }
`

const Spacer = styled.div`
  min-height: 100%;
`

export default function MainLayout({ children }) {
  return (
    <>
      <LayoutGrid>
        <SideBar />
        <Spacer />
        <div className="mt-8">
          <Container>{children}</Container>
        </div>
      </LayoutGrid>
    </>
  );
}
