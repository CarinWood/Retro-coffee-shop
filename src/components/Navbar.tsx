

export const Navbar = () => {
  return (
    <nav className="font-spirax fixed top-0 z-[12] w-[100%] 
    h-[10vh] opacity-80 flex justify-center items-center text-white
    text-[30px]">
        <a href="#hot"><p className="mx-6 bg-transparent cursor-pointer">Hot</p></a>
        <a href="#juicy"><p className="mx-6 bg-transparent cursor-pointer">Juicy</p></a>
        <a href="#cosy"><p className="mx-6 bg-transparent cursor-pointer">Cosy</p></a>
    </nav>
  )
}
