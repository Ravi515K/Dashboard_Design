import { Dialog } from "@headlessui/react";
import { useState } from "react";
import ReactForm from "./ReactForm";


export default function AddModal({setPerson, person}) {
  let [isOpen, setIsOpen] = useState(true);
  
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 backdrop-blur-sm flex w-screen items-center justify-center p-4 ">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white border-2 border-[#1F723F] p-10">
          <Dialog.Title className={"font-semibold"}>Add details</Dialog.Title>
          <div className="mt-5">
            <ReactForm setPerson={setPerson} person={person} setIsOpen={setIsOpen}/>
          </div>
        </Dialog.Panel>
        {/* <div>
          <Toaster />
        </div> */}
      </div>
    </Dialog>
  );
}
