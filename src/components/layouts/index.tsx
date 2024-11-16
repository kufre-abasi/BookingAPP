import React from 'react'
import DashboardHeader from '@/components/Navbar/DashboardHeader';
import DashboardSidebar from '@/components/Navbar/DashboardSidebar';
interface DefualtLayoutProps {
    children: React.ReactNode;
    
  
  }

const  Layout = ({ children }: DefualtLayoutProps) => {
  return (
    <>
      <div className="max-h-screen min-h-screen  bg-[#F0F2F5] overflow-y-hidden w-full ">
        <DashboardHeader />
        <div className='lg:hidden flex'>
          <DashboardSidebar />
        </div>
        <div>
          <div className=" container lg:pt-6 pt-4 w-full gap-10 flex flex-row justify-between ">
            <div className="lg:flex hidden  ">
              <div className="h-[80vh] ">
                <div className="lg:flex hidden gap-y-6 flex-col">
                  <DashboardSidebar />
                </div>
              </div>
            </div>

            <div className=" w-full  overflow-y-auto lg:h-[84vh] pb-20 h-[80vh] hide-scrollbar">
              {children}
            </div>
          </div>
        </div>
      </div>
      {/* // <div className="flex bg-[#f8f8f8] overflow-hidden">
      //   <DashboardSidebar />
      //   <div className="flex-grow">
      //     <DashboardHeader />
      //     <div className="p-5 h-[88vh] overflow-y-auto">{children}</div>
      //   </div>
      // </div> */}
    </>
  );
};

export default  Layout;
