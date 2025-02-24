import {motion} from "motion/react"
export const AnimatedAIResult = ({ result = "" }: { result?: string }) => {
    const array = result.split(" "); 

    return (
        <p>
            {array.map((word, index) => (
                <motion.span
                    initial={{ opacity: 0 }}
                    className="px-1"
                    key={index}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.01 + index * 0.1,
                        ease: "easeInOut",
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </p>
    );
};
