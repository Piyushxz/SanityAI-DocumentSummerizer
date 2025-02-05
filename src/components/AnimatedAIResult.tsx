import {motion} from "motion/react"
export const AnimatedAIResult = ({ result = "" }: { result?: string }) => {
    const array = result.split(" "); 
    console.log(array);

    return (
        <p>
            {array.map((word, index) => (
                <motion.span
                    initial={{ opacity: 0 }}
                    className="px-1"
                    key={index}
                    animate={{ opacity: 1, y: 0 }}
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
