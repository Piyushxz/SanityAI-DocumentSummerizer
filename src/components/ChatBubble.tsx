import { AnimatedAIResult } from "./AnimatedAIResult";
import { RobotIcon } from "./icons/RobotIcon";

interface ChatBubbleProps {
    variant: "user" | "sender";
    text: string,
    isActive?:boolean

  }
  
  const ChatBubbleStyles = {
    user: " bg-[#191919] text-white",
    sender: " bg-[#191919] text-white ",
  };


  
  export const ChatBubble = (props: ChatBubbleProps) => {
    return (
      <div
        className={`flex flex-col py-1 ${
          props.variant === "user" ? "self-end" : "self-start"
        } max-w-[600px] w-fit`}
      >

        {
            props.variant === 'user' ? 
            <div
            className={`${
              ChatBubbleStyles[props.variant]
            } px-4 py-2 rounded-lg shadow-md text-sm font-primary max-w-[30vw] break-words`}
          >
            {props.text}
          </div>
          :
        <div className="flex gap-2">
            <div className="relative">
            <RobotIcon/>
            </div>
            <div
            className={`text-white bg-[#191919] px-4 py-2 rounded-lg shadow-md text-sm font-primary max-w-[30vw] break-words`}
          >
            {
                props.isActive? 
                 <AnimatedAIResult result={props.text}/>
                :
                props.text

            }
          </div>
        </div>
        }

      </div>
    );
  };
  