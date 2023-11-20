import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import BatchTransfer from "./views/BatchTransfer";
import Home from "./views/Home";
import Info from "./views/Info";
import { NavBar } from "./components/Nav";
import { createConfig, WagmiConfig } from "wagmi";
import { getDefaultConfig, ConnectKitProvider } from "connectkit";
import { arbitrumGoerli, arbitrum } from "viem/chains";
import LOGO from "./assets/logo.png";
import theme from "./assets/theme.json";

const config = createConfig(
  getDefaultConfig({
    alchemyId: "F5YggdMfe9qiv7yiOd6-lXdUreULrDeJ", // or infuraId
    walletConnectProjectId: "a5ef82c812b880b399c00d296e6b343a",

    // Required
    appName: "EasyDrop",

    // Optional
    appDescription: "EasyDrop",
    appUrl: "/", // your app's url
    appIcon: LOGO,
    chains: [arbitrumGoerli, arbitrum],
  })
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <WagmiConfig config={config}>
        <ConnectKitProvider customTheme={theme}>
          <div className="from-blue-100 flex h-screen w-screen flex-col bg-gradient-to-b to-white font-base">
            <NavBar />
            <div className="flex-1 overflow-y-scroll">
              <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/info" Component={Info}></Route>
              </Routes>
            </div>
          </div>
        </ConnectKitProvider>
      </WagmiConfig>
    </Router>
  );
}

export default App;
