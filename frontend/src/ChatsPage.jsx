import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '468f8b0a-e791-4a97-b68e-1f957a3d7c95', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        </div>
    )
}

export default ChatsPage