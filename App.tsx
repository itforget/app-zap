import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, StatusBar, SafeAreaView } from '@gluestack-ui/themed';
import Rotas from './src/rotas';
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StatusBar />
      <SafeAreaView flex={1}>
      <Rotas />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

