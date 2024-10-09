
export default function ContactMe() {
  return (
    <div className="bg-white">
        <div className="text-center space-y-4 mt-10 mb-5 ">
            <h1 className="text-4xl text-[#000000] font-bold">Lets Design Together</h1>
            <p className="text-sm text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam a quas delectus molestiae, incidunt eos unde dicta obcaecati labore!</p>
        </div>
        <div className="text-center space-y-4  space-x-4 mt-10">
        <input type="text" placeholder="Type here" className="input input-bordered bg-white w-full max-w-xs" />
        <button className="btn text-white hover:bg-orange-400 bg-[#FD6F00]">Contact Me</button>
        </div>
    </div>
  )
}
