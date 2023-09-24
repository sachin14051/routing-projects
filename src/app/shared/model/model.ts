export interface Iuser{
    fname:string,
    uid:string
}

export interface Iproduct{
    pname:string,
    pid:string, 
    pstatus :prodctStatus
   
}


export  type prodctStatus= "inProgress"   | "dispatched" | "delivered"

