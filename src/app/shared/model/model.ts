export interface Iuser{
    fname:string,
    uid:string,
    userRole:"admin" | "user"
}

export interface Iproduct{
    pname:string,
    pid:string, 
    pstatus :prodctStatus,
    canReturn : boolean
   
}


export  type prodctStatus= "inProgress"   | "dispatched" | "delivered"

