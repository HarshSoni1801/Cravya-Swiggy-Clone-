import RestHeader from "./RestHeader"
import { Outlet } from "react-router"
export default function SecHome() {
   return(
      <>
         <RestHeader></RestHeader>
         <Outlet></Outlet>
      </>
   )
}