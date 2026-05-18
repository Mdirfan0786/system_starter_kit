import { useState } from "react";

import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyle";

import { lightTheme, darkTheme } from "./theme/theme";

import { Button } from "./components/Button/Button";

import { Input } from "./components/Input/Input";

import { Card } from "./components/Card/Card";

import { Badge } from "./components/Badge/Badge";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />

      <div style={{ padding: "2rem" }}>
        <Button onClick={() => setIsDark(!isDark)}>Toggle Theme</Button>

        <Button variant="outline" style={{ marginLeft: "1rem" }}>
          Outline Button
        </Button>

        <Card>
          <h2>Design System Starter Kit</h2>

          <Input placeholder="Enter something..." />

          <Badge>Active</Badge>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
