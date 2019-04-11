import PubNub from 'pubnub'
import pubnubConfig from './pubnub.config'
import { MESSAGE_CHANNEL } from './constants/channels'

export default class PubSub {
  constructor (channels) {
    this.pubnub = new PubNub(pubnubConfig)
    this.subscribe(channels)
  }
  addListener = listenerConfig => this.pubnub.addListener(listenerConfig)

  publish = (message, channel=MESSAGE_CHANNEL) => this.pubnub.publish({ message, channel })

  subscribe = channels => {
    // console.log('SUBSCRIBED TO', channels.join(', '))
    this.pubnub.subscribe({ channels })
  }
}
