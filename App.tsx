import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, StatusBar } from '@gluestack-ui/themed';
import Rotas from './src/rotas';
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StatusBar />
      <Rotas />
    </GluestackUIProvider>
  );
}

