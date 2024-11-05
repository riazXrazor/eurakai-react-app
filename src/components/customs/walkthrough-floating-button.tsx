import { FaRegCompass } from "react-icons/fa6";
import { Tooltip } from "flowbite-react";
import { useTour } from "@reactour/tour";

function WalkthroughFloatingButton() {
  const { setIsOpen } = useTour();
  return (
    <div className="fixed bottom-4 right-4">
      <Tooltip content="Walkthrough">
        <button
          className="inline-flex gap-2 bg-[#0449D1] hover:bg-[#022C7D] border-[#0449D1] hover:border-[#022C7D] text-white font-bold py-4 px-4 rounded-full shadow-lg text-4xl"
          onClick={() => setIsOpen(true)}
        >
          <FaRegCompass />
        </button>
      </Tooltip>
    </div>
  );
}

export default WalkthroughFloatingButton;
