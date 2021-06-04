import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import GlobalStyles from "../../theme/globalStyles";
import theme from "../../theme/StyledComponentsTheme";

const MainTemplate = ({ children }) => {
  return (
    <>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
