/**
 * 负责用户交互逻辑
 *
 * Created by erichua on 2019-09-07T07:37:00.320Z.
 */
import React, { Component } from 'react'
import { AppNavigator, WeBaseScene } from '@webank/trident'
import EntryList from '../../../bizComponents/EntryList'
import PrimaryButton from '@webank/trident/library/uiComponent/PrimaryButton'
import { L } from '@webank/trident/trident-ui'
import NavigationStackView from '../components/NavigationStackView'

export default class NavigationScene extends WeBaseScene {
  static navigationOptions = ({ navigation: { state: { params = {} } } }) => ({
    headerTitle: params.title || 'NavigationScene'
  })

  render () {
    return (
      <L.Column>
        <EntryList>
          <PrimaryButton text={`Go NavAScene(with params)`} onPress={() => {
            AppNavigator.example.NavAScene({
              foo: 'bar',
              time: {
                ts: new Date().getTime()
              }
            })
          }} />
          <PrimaryButton text={`Back`} onPress={() => {
            AppNavigator.goBack()
          }} />
        </EntryList>

        <NavigationStackView routes={AppNavigator.getCurrentRoutes()} />
      </L.Column>
    )
  }
}