import { useSetRecoilState } from "recoil";
import { isFileSelected } from "../atoms";
import { toast } from "sonner";

const PDFUpload = () => {
    const setFile = useSetRecoilState(isFileSelected)
    const handleDocumentInput = (e:React.FormEvent<HTMLInputElement>)=>{

        const target = e.target as HTMLInputElement & {
            files:FileList
        }
        setFile(target.files[0])
        toast.success(`${target.files[0].name} Selected`)
    }
    return (
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center text-[#191919] w-2/3 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#191919]"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PDF only (Limit is 4mb for now)
            </p>
          </div>
          <input onChange={handleDocumentInput}
          id="dropzone-file" type="file" accept="application/pdf" className="hidden" />
        </label>
      </div>
    );
  };
  
  export default PDFUpload;
