export const doActionOnEnterKey = ({ event, action, proceed = true }) => {
  if (event.key === 'Enter' && proceed) {
    action()
  }
}
