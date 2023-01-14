import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
// import { LivepeerConfig, createReactClient, studioProvider, ThemeConfig } from '@livepeer/react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { polygon, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_API }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Livepeer-Netflix-Clone',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

// const client = createReactClient({
//   provider: studioProvider({ apiKey: process.env.LIVEPEER_API }),
// });

// const livepeerTheme: ThemeConfig = {
//   colors: {
//     accent: 'rgb(0, 145, 255)',
//     containerBorderColor: 'rgba(0, 145, 255, 0.9)',
//   },
//   fonts: {
//     display: 'Inter',
//   },
// };

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        {/* <LivepeerConfig client={client} theme={livepeerTheme}> */}
              <RainbowKitProvider chains={chains} theme={darkTheme()}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
              </RainbowKitProvider>
        {/* </LivepeerConfig> */}
      </WagmiConfig>
    </>
  );
}
