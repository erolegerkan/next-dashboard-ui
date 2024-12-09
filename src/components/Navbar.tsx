import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden lg:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-grey-300 px-2">
        <Image src={"/search.png"} alt={"Search Bar"} width={14} height={14} className="cursor-pointer"/>
        <input type="text" placeholder="Search..." className="p-2 bg-transparent w-[200px] outline-none"/>
      </div>
      {/* ICONS AND USER*/}
      <div className="flex items-center justify-end w-full gap-4">
        <div className="flex items-center justify-center bg-white cursor-pointer rounded-full">
          <Image src={"/message.png"} alt={"Messages"} width={20} height={20}/>
        </div>
        <div className="flex items-center justify-center bg-white cursor-pointer rounded-full relative">
          <Image src={"/announcement.png"} alt={"Messages"} width={20} height={20}/>
          <div className="absolute -top-3 -right-3 rounded-full bg-purple-600 w-4 h-4 flex items-center justify-center text-white text-xs">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <div>
          <Image src={"/avatar.png"} alt={"Avatar"} width={30} height={30} className="rounded-full cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar