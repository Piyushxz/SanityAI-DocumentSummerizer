import { ChatBubble } from "./ChatBubble";
export const QueryBox = () => {
    return (
      <div className="flex flex-col gap-2 p-2 w-full ">
        <ChatBubble text="hey" variant="sender" />
        <ChatBubble text="wassup" variant="user" />
      </div>
    );
  };
  