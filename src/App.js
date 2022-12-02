import React from "react";

// profile pic female - "https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
// profile pic male - "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"

function App() {
  return (
    <div className="container h-[800px] w-full mx-auto my-20 ">
      <div className="heading  ">
        <h1 className="font-bold text-5xl text-black ">Users</h1>
      </div>
      {/* Search and nav bar */}
      <div  className="flex flex-col md:flex-row justify-between my-10 mx-auto ">
        {/* Search Box */}
        <input className="md:w-[300px] text-left border p-4  rounded-sm display-block justify-center " type="text" placeholder="Search Users" />
        {/* Buttons or nav bar */}
        <div className=" ">
          <ul className="flex flex-col md:flex-row justify-between">
            <li className="mx-6"><button className="hover:bg-[#7fa0fd] py-4 px-2 rounded-md">Reputation</button></li>
            <li className="mx-6"><button className="hover:bg-[#7fa0fd] py-4 px-2 rounded-md">New Users</button></li>
            <li className="mx-6"><button className="hover:bg-[#7fa0fd] py-4 px-2 rounded-md">Voters</button></li>
            <li className="mx-6"><button className="hover:bg-[#7fa0fd] py-4 px-2 rounded-md">Editors</button></li>
            <li className="mx-6"><button className="hover:bg-[#7fa0fd] py-4 px-2 rounded-md">Moderators</button></li>
          </ul>
        </div>
      </div>
      

      <div className="grid grid-row-3 mx-auto md:grid-cols-3 my-24 md:gap-24  md:justify-between">
        <div className="flex flex-row  justify-center  hover:border hover:rounded-lg hover:scale-105 ">
        <div className=" flex flex-row my-10 mx-auto">
          <div className="justify-center "><img className="rounded-full max-w-[120px] mx-auto mt-8" src="data:image/jpeg;base64,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" alt="/" /></div>
          <div className="justify-left text-left my-3 py-4 px-4">
            <h1 className="text-3xl font-bold">Lelah Nichols</h1>
            <p className="font-light text-sm">Troy, Mi</p>
            <div className="flex flex-row ">
              <div className="rounded-lg border w-[50px]  text-center my-5 text-[#7fa0fd]">
                <p className="">Skills</p>
              </div> 
              <div className="rounded-lg border ml-2 w-[50px] text-center my-5 text-[#7fa0fd]">
                <p>Skills</p>
              </div> 
            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-row justify-center  hover:border hover:rounded-lg hover:scale-105 ">
        <div className=" flex flex-row   my-10  mx-auto">
          <div className="justify-center "><img className="rounded-full max-w-[120px] mx-auto mt-8 " src="https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png" alt="/" /></div>
          <div className="justify-left text-left my-3 py-4 px-4">
            <h1 className="text-3xl font-bold">Jesus Weiss</h1>
            <p className="font-light text-sm">Fort Worth, Tx</p>
            <div className="flex flex-row ">
              <div className="rounded-lg border w-[50px]  text-center my-5 text-[#7fa0fd]">
                <p className="">Skills</p>
              </div> 
              <div className="rounded-lg border ml-2 w-[50px] text-center my-5 text-[#7fa0fd]">
                <p>Skills</p>
              </div>
              <div className="rounded-lg border ml-2 w-[50px] text-center my-5 text-[#7fa0fd]">
                <p>Skills</p>
              </div>

            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-row justify-center  hover:border hover:rounded-lg hover:scale-105 ">
        <div className=" flex flex-row  my-10   mx-auto">
          <div className="justify-center "><img className="rounded-full max-w-[120px] mx-auto mt-8 " src="https://p.kindpng.com/picc/s/442-4426528_round-picture-profile-blond-hd-png-download.png" alt="/" /></div>
          <div className="justify-left text-left my-3 py-4 px-4">
            <h1 className="text-3xl font-bold">Annie Rice</h1>
            <p className="font-light text-sm">Austin, TX</p>
            <div className="flex flex-row ">
              <div className="rounded-lg border w-[50px]  text-center my-5 text-[#7fa0fd]">
                <p className="">Skills</p>
              </div> 
              <div className="rounded-lg border ml-2 w-[50px] text-center my-5 text-[#7fa0fd]">
                <p>Skills</p>
              </div> 
            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-row  justify-center  hover:border hover:rounded-lg hover:scale-105 ">
        <div className=" flex flex-row my-10  mx-auto">
          <div className="justify-center "><img className="rounded-full max-w-[120px] mx-auto mt-8 " src="data:image/jpeg;base64,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" alt="/" /></div>
          <div className="justify-left text-left my-3 py-4 px-4">
            <h1 className="text-3xl font-bold">Robert Brower</h1>
            <p className="font-light text-sm">Cincinnati, OH</p>
            <div className="flex flex-row ">
              <div className="rounded-lg border w-[50px]  text-center my-5 text-[#7fa0fd]">
                <p className="">Skills</p>
              </div> 
              <div className="rounded-lg border ml-2 w-[50px] text-center my-5 text-[#7fa0fd]">
                <p>Skills</p>
              </div>
              <div className="rounded-lg border ml-2 w-[50px] text-center my-5 text-[#7fa0fd]">
                <p>Skills</p>
              </div>

            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-row justify-center  hover:border hover:rounded-lg hover:scale-105 ">
        <div className=" flex flex-row my-10 mx-auto">
          <div className="justify-center "><img className="rounded-full max-w-[120px] mx-auto mt-8 " src="https://png.pngitem.com/pimgs/s/128-1284293_marina-circle-girl-picture-in-circle-png-transparent.png" alt="/" /></div>
          <div className="justify-left text-left my-3 py-4 px-4">
            <h1 className="text-3xl font-bold">Amy Campbell</h1>
            <p className="font-light text-sm">Warrior, AL</p>
            <div className="flex flex-row ">
              <div className="rounded-lg border w-[50px]  text-center my-5 text-[#7fa0fd]">
                <p className="">Skills</p>
              </div> 
              <div className="rounded-lg border ml-2 w-[50px] text-center my-5 text-[#7fa0fd]">
                <p>Skills</p>
              </div> 
            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-row  justify-center  hover:border hover:rounded-lg hover:scale-105 ">
        <div className=" flex flex-row my-10 mx-auto">

          <div className="justify-center "><img className="rounded-full max-w-[120px] mx-auto mt-8 " src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png" alt="/" /></div>
          <div className="justify-left text-left my-3 py-4 px-4">
            <h1 className="text-3xl font-bold">Antony S. Morin</h1>
            <p className="font-light text-sm">Lyhdrust, NJ</p>
            <div className="flex flex-row ">
              <div className="rounded-lg border w-[50px]  text-center my-5 text-[#7fa0fd]">
                <p className="">Skills</p>
              </div> 
              <div className="rounded-lg border ml-2 w-[50px] text-center my-5 text-[#7fa0fd]">
                <p>Skills</p>
              </div> 
            </div>
          </div>
        </div>
        </div>

      </div>


    </div>
  );
}

export default App;

