import { BellIcon, CalendarIcon, MoveLeftIcon, MoveUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollableDiv } from "./ScrollableDiv";

const profilePictureSize = "2.5rem";
const profilePictureConstraints = `max-h-[${profilePictureSize}]  max-w-[${profilePictureSize}] min-w-[${profilePictureSize}] min-h-[${profilePictureSize}]`;
// const;
function MeetingParticipantsView() {
  return (
    <div className="bg-black/10 rounded-full min-w-fit gap-3 flex items-center justify-between pr-1 max-w-[50%]">
      {/* renders meeting participants */}
      <div className="bg-white min-w-[8rem] pl-1 roudned-full h-full w-fit flex rounded-full items-center  ">
        <span
          className={`${profilePictureConstraints} justify-center  border-2 border-white  overflow-clip flex items-center  bg-neutral-500 rounded-full`}
        >
          <Image
            src={"/pfp.png"}
            alt="profile picture"
            width={40}
            className="object-cover h-full"
            height={40}
          />
        </span>
        <span
          className={`${profilePictureConstraints} justify-center relative -left-3 border-2 border-white  overflow-clip flex items-center  bg-neutral-500 rounded-full`}
        >
          <Image
            src={"/pfp.png"}
            alt="profile picture"
            width={40}
            className="object-cover h-full"
            height={40}
          />
        </span>
      </div>
      <span className="text-xs font-light">36min</span>
      <Link
        href="#"
        className="rounded-full ml-3 w-8 h-8 flex justify-center items-center border-black active:scale-95 hover:bg-black/10 border"
      >
        <MoveUpRightIcon className="w-4" />
      </Link>
      {/* ends rendering meeting participants */}
    </div>
  );
}
function MeetingTimeline() {
  return (
    <div className="rounded-full hidden  items-center p-1 bg-white md:flex">
      {/* Navbar title */}
      <h2 className="lg:text-xl whitespace-nowrap hidden lg:flex mx-4">
        Your schedule
      </h2>

      {/* Calendar button */}
      <button className="rounded-full min-w-[18vh] border flex items-center py-1 pl-1 pr-3 hover:bg-neutral-100 ">
        <span className="max-w-[2.5rem] max-h-[2.5rem] p-2 bg-neutral-200 rounded-full">
          <CalendarIcon className="w-5 h-5" />
        </span>
        <span className="text-sm ml-2">28 December</span>
      </button>
      {/* Starts google meet schedule */}
      <div className="bg-lime-300 relative h-16 w-[35vw] overflow-clip rounded-full mx-3 py-2">
        {/* <div > */}
        <ScrollableDiv className="absolute scroll-width-none w-full flex flex-shrink-0 overflow-y-clip overflow-x-scroll h-full my-auto inset-y-0 items-center gap-4 px-2">
          <MeetingParticipantsView />
          <span className="border-l border-black h-3/5 whitespace-nowrap pl-3 flex text-xs items-center">
            2:00 pm
          </span>
          <MeetingParticipantsView />
          <span className="border-l border-black h-3/5 "></span>

          <MeetingParticipantsView />
          <span className="border-l border-black h-3/5 "></span>

          <MeetingParticipantsView />
        </ScrollableDiv>
      </div>
      {/* </div> */}
      {/* ends google meet schedule */}
      <Link
        href="#"
        className=" flex items-center h-12 w-12 border text-neutral-300  active:scale-95 hover:text-neutral-400 justify-center  rounded-full"
      >
        <MoveUpRightIcon className="" />
      </Link>
    </div>
  );
}
export default function Home() {
  return (
    <main className="flex min-h-screen bg-black  flex-col items-center py-6 px-3 lg:px-16">
      <div className="flex items-center justify-between gap-2 w-full max-w-7xl">
        <Image
          src={"/logo.svg"}
          height={50}
          width={50}
          alt="logo"
          className="mr-16"
        />
        <MeetingTimeline />
        <div className="flex gap-3">
          {/* ends white navigation */}
          <button className="bg-white/10 hidden  text-white w-12 h-12 active:scale-95  hover:bg-white/20 md:flex items-center justify-center rounded-full">
            <BellIcon className="w-6 h-6" strokeWidth={1.3} />
          </button>
          <button className="rounded-full overflow-clip active:scale-95 w-12 h-12">
            <Image alt="profile" src="/pfp.png" width={50} height={50} />
          </button>
        </div>
      </div>
      <div className="mt-10">
        <button className="bg-white/10 rounded-full w-12 h-12 flex justify-center items-center text-white active:scale-95 hover:bg-white/20"><MoveLeftIcon /></button>
      </div>
    </main>
  );
}
