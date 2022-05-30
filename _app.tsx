import { theme, ThemeProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default App;
