import Request from "./Request";

const Addsellers = () => {
    return ( 
        <div className="lg:p-5 flex flex-col flex-wrap">
            <p className="text-[#64748B] text-[20px]">Requests</p>
            <div className="py-5 flex flex-col gap-3">
            <Request />
            <Request />
            <Request />
            <Request />
            </div>
        </div>
     );
}
 
export default Addsellers;