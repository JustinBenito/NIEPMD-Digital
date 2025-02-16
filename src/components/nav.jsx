
const Nav = () => {
  return (
    <>
      <nav className="bg-white border-b-4 border-[#005197] ">
        <div className="max-w-screen-xl gap-4 flex flex-row  items-center justify-center mx-auto p-4">
          <a href="https://www.ssn.edu.in/" className="flex items-center">
            <img
              src="https://www.ssn.edu.in/wp-content/uploads/2019/12/logo.jpg"
              className="md:w-32 md:h-16 w-24"
              alt="SSN logo" 
            />
          </a>
          <div className="flex-col flex text-center">
            <h2 className="md:text-5xl font-bold text-xl text-[#005197]">
            National Institute For Empowerement <br /> of Persons with Multiple Disabalities
            </h2>
            <h1 className="md:text-xl font-bold text-sm">
            State Highway 49, Post, Muthukadu, Tamil Nadu
            </h1>
          </div>
          <a href="https://niepmd.tn.nic.in" className="flex items-center">
            <img
              src="https://media.9curry.com/uploads/organization/image/1022/niepmd-logo.png"
              className="md:h-24 md:w-24 w-14"
              alt="NIEPMD LOGO"
            />
          </a>
        </div>
      </nav>

     
    </>
  );
}

export default Nav