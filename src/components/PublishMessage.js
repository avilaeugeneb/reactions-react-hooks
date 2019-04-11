import React, { useState } from 'react'
import { newMessage } from '../state/actions'
import { doActionOnEnterKey } from '../helpers/listeners'
import { useAppContext } from './hooks'

const PublishMessage = () => {
  const { pubsub: { publish }, state: { username } } = useAppContext()
  const [text, setText] = useState('')

  const updateText = e => {
    setText(e.target.value)
  }

  const publishMessage = () => {
    if (text.trim()) publish(newMessage({ text, username }))
  }

  return (
    <div>
      <h3>Got something to say?</h3>
      <input
        value={text} onChange={updateText}
        onKeyPress={event => doActionOnEnterKey({ event, proceed: text.trim(), action: publishMessage })}
      />
      {' '}
      <button onClick={publishMessage}>Publish it!</button>
    </div>
  )
}

export default PublishMessage
