import Markdown from "react-markdown";

interface Props {
  text: string;
}

export const GptMessage = ({ text }: Props) => {
  return (
    <div className="col-start-1 col-end-13 p-3 rounded-lg">
      <div className="flex flex-row items-start">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-600 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"/></svg>
        </div>
        <div className="relative ml-3 text-lg bg-black bg-opacity-35 pt-3 pb-2 px-4 shadow rounded-xl">
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </div>
  );
};
