import React, { useReducer, useEffect } from 'react'
import reducer, { initialState } from '../state/reducer'

import PubSub from '../pubsub'

import PublishMessage from './PublishMessage'
import MessageBoard from './MessageBoard'
import SetUsername from './SetUsername'

import Context from '../context'
import { MESSAGE_CHANNEL } from '../constants/channels'

const pubsub = new PubSub([MESSAGE_CHANNEL])

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('STATE', state)

  useEffect(() => {
    pubsub.addListener({
      message: messageObj => {
        const { channel, message } = messageObj

        console.log('Received a message', message)
        console.log('from channel:', channel)

        dispatch(message)
      }
    })
  }, [])

  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
      <h2>Reaction</h2>
      <SetUsername />
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  )
}

export default App
