import { useRecoilState} from "recoil";
import { ChatBubble } from "./ChatBubble";
import { isAIResultLoading, messages } from "../atoms";
import { useRef
 } from "react";
import { ChatBubbleLoading } from "./ChatBubbleLoading";
import { useEffect } from "react";

export const QueryBox = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [allMessages,setAllMessages] = useRecoilState(messages)
  const [isLoading,setIsLoading] = useRecoilState(isAIResultLoading)

  console.log("loading,s",isLoading)
    useEffect(()=>{

      
      const scrollToBottom = () => {
        containerRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

      scrollToBottom();


      return ()=>{
      }
    },[allMessages])

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
        <div ref={containerRef}/>
      </div>
    );
  };
  