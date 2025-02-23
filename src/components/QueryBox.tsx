import {   useRecoilValue} from "recoil";
import { ChatBubble } from "./ChatBubble";
import { isAIResultLoading, isHistoryLoading, messages } from "../atoms";
import { useRef
 } from "react";
import { ChatBubbleLoading } from "./ChatBubbleLoading";
import { useEffect } from "react";

import { ThreeDot } from "react-loading-indicators";

export const QueryBox = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const allMessages = useRecoilValue(messages)
  const isLoading = useRecoilValue(isAIResultLoading)
  const isLoadingChatHistory = useRecoilValue(isHistoryLoading)
  


  console.log("all messages",allMessages)

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

          { 
          !isLoadingChatHistory? (
            <>
                  <ChatBubble text="hey" variant="Bot" />
    
            {
                allMessages.map(({content,sentBy})=><ChatBubble text={content} variant={sentBy} isActive/>)
            }
            {
                isLoading &&
                <ChatBubbleLoading/>
    
            }
            <div ref={containerRef}/>
            </>

          )
          :(
            <div className="flex justify-center items-center translate-y-48">
            <ThreeDot variant="brick-stack" color="#5c8dda" size="large" text="" textColor="#ffffff" />
          </div>
          )

          
          }
          

        </div>
      );
    

 

  };
  