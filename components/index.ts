import { MouseEventHandler } from "react"

 export interface customButtonProps{
title:string
styles?:string
handleEvent:MouseEventHandler<HTMLButtonElement>
}
export interface carsDataInterface{
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders:number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}

export interface carDetailsInterface{
  
    details:object
}