import { useRecoilValue } from "recoil";
import { ChatBubble } from "./ChatBubble";
import { isAIResultLoading, messages } from "../atoms";
import { ChatBubbleLoading } from "./ChatBubbleLoading";
export const QueryBox = () => {

    const allMessages = useRecoilValue(messages)
    const isLoading = useRecoilValue(isAIResultLoading)
    return (
      <div className="flex flex-col gap-2 p-2 w-full ">
        <ChatBubble text="hey" variant="bot" />
        <ChatBubble text="wassup wassup wassup wassup wassup wassup wassup wassup wassup wassup wassup wassup wassup wassup wassup" variant="bot" isActive />

        {
            allMessages.map(message=><ChatBubble text={message.message} variant={message.sentBy} isActive/>)
        }
        {
            isLoading &&
            <ChatBubbleLoading/>

        }
      </div>
    );
  };
  