import Image from "next/image"

function Header() {
  return (
    <div className="w-full h-fit flex flex-col items-center">
      <div className="flex border-b uppercase justify-between w-full pb-1 border-foreground/70 opacity-70 mb-10">
        <p>Google Developer Groups</p>
        <p>Constantine</p>
      </div>
      <div className="text-5xl text-center w-full">
        <Image
          src="/logo.svg"
          alt="event Logo"
          width={200}
          height={200}
          className="mx-auto my-3 sm:w-6/10 w-8/10"
        />
      </div>
    </div>
  )
}

export default Header
