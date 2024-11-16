
import React from "react";

interface GenderProps{
    icon: React.ReactNode;
    gender:string;
    percent:string;
}

const Gender : React.FC<GenderProps> = ({ icon, gender ,percent }) =>{
    return(
        <div className="flex items-center gap-3">
            <div>
                {icon}
            </div>
            <div>
                <p className="text-[12px] text-[#64748B] font-bold">{gender}</p>
                <p className="text-[16px]">{percent}</p>
            </div>
        </div>
    )
}
export default Gender;