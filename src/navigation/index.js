import { NativeBaseProvider } from 'native-base';
import React from 'react';

import { AuthenticatedUserProvider } from './AuthenticatedUserProvider';
import RootNavigator from './RootNavigator';

/**
 * Wrap all providers here
 */

export default function Routes() {
  return (
    <NativeBaseProvider>
      <AuthenticatedUserProvider>
        <RootNavigator />
      </AuthenticatedUserProvider>
    </NativeBaseProvider>
  );
}