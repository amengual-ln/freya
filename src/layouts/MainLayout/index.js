import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Container from "../../components/Container";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <SideBar />
      <Container>{children}</Container>
    </>
  );
}
