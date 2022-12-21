export default  interface AssuranceVehicule {
    id: number,
    date_assurance: Date,
    datedebut: Date,
    a_payer: number,
    idvoiture: number
}

export const dateAssurance = (num:AssuranceVehicule) =>{
    return new Date(num.date_assurance);
}
export const datedebutAssu = (num:AssuranceVehicule)=>{
    return new Date(num.datedebut);
}