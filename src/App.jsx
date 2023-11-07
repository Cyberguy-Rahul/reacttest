import Randomgif from "./components/Randomgif"
import Tag from "./components/Tag"
export default function App() {
  return (
    <div className="background flex flex-col items-center  h-[100vh] relative overflow-x-hidden " >
      <h1 className="w-11/12  text-center text-[30px] bg-white  mt-[40px] rounded-md
       font-bold py-2" >Random Gif</h1>

    <div className="w-full" >
      <Randomgif className=""></Randomgif>
      <Tag></Tag>
    </div>
    </div>
  )
}
