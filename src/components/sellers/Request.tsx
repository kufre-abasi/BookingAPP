const Request = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 font-Poppins">
      <div className="bg-white px-5 py-4 rounded-[8px]">
        <p>
          <span>Lorem Ipsum</span> has requested to be a seller
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-[#00C72C] text-white px-6 py-2 rounded-[30px]">
          Accept
        </button>
        <button className="border border-[#D70000] text-[#D70000] rounded-[30px] px-6 py-2 ">
          Decline
        </button>
      </div>
    </div>
  );
};

export default Request;
