/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ToastProviderComponent} from './components/molecules';
import Navigation from './navigation';

function App(): React.JSX.Element {

  return (
      <GestureHandlerRootView style={{flex: 1}}>
          <ToastProviderComponent>
              <BottomSheetModalProvider>
                  <Navigation />
              </BottomSheetModalProvider>
          </ToastProviderComponent>
      </GestureHandlerRootView>
  );
}

export default App;
