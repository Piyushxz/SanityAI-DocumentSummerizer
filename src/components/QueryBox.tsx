import { useRecoilValue } from "recoil";
import { ChatBubble } from "./ChatBubble";
import { messages } from "../atoms";
export const QueryBox = () => {

    const allMessages = useRecoilValue(messages)

    return (
      <div className="flex flex-col gap-2 p-2 w-full ">
        <ChatBubble text="hey" variant="sender" />
        <ChatBubble text="wassup wassup wassup wassup wassup wassup wassup wassup wassup wassup wassup wassup wassup wassup wassup" variant="sender" isActive />

        {
            allMessages.map(message=><ChatBubble text={message} variant="sender"/>)
        }
      </div>
    );
  };
  