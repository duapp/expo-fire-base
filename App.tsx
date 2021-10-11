import { Box, Center, NativeBaseProvider } from 'native-base';
import React from 'react';
import useCachedResources from './hooks/useCachedResources';
import theme from './theme';
import { t } from './utils';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <NativeBaseProvider theme={theme}>
      <Center flex={1}>
        <Box>{t('home.test')}</Box>
      </Center>
    </NativeBaseProvider>
  );
}
