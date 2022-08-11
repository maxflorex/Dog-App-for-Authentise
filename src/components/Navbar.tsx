
type Props = {}

const Navbar = (props: Props) => {
  return (
      <nav className="w-full flex justify-between items-center p-8">
        <h1 className='text-2xl font-semibold text-teal-900'>We ❤️ puppies</h1>
        <img src='/dog.ico' alt="logo" className='w-16 h-16 object-contain hover:skew-y-3 hover:rotate-2' />
      </nav>
  )
}

export default Navbar