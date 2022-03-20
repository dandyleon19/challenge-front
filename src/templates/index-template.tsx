import * as React from "react";
import CustomNavbar from "../components/custom-navbar/custom-navbar";
import {Container} from "react-bootstrap";

interface AppLayoutContainerProps {
  children: React.ReactNode
}

const IndexTemplate = (props: AppLayoutContainerProps): React.ReactElement => {

  const { children } = props

  return (
    <React.Fragment>
      <CustomNavbar />
      <Container>
        {children}
      </Container>
    </React.Fragment>
  )
}

export default IndexTemplate
