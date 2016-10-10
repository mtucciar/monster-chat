import { connect } from 'react-redux'
import ChatLog from '../components/ChatLog'

const mapStateToProps = (state) => {
  return {
    logMessages: state.monsterReducer.chatLog
  }
}

const VisibleChatLog = connect(
  mapStateToProps
)(ChatLog)

export default VisibleChatLog
