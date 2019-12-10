/**
 * 负责用户交互逻辑
 *
 * Created by rcrabwu on 2019-10-24T08:41:28.998Z.
 */
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WeBaseScene, Button, dimens, NavBar } from '@webank/trident'

export default class HomeTab extends WeBaseScene {
  onResume (fromScene, toScene) {
    super.onResume(fromScene, toScene)
  }

  render () {
    return (
      <View style={{ flex: 1, paddingTop: dimens.TOTAL_NAV_BAR_HEIGHT }}>
        <NavBar
          title={'HomeTab'}
          hideLeftButton
        />
        <View style={styles.main}>
          <Button
            text={'Open Drawer'}
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('DrawerOpen')
            }} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20
  },
  button: {
    width: '100%'
  }
})
