import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <div className="flex justify-between max-md:justify-center  items-center mx-[60px] my-8">
                <Link to="/"><h3 className="min-[320px]:!text-center flex text-[32px] font-display text-n2 leading-[150%] ">Lybomyr Pytulya</h3></Link>
                <div className="text-n2 text-1xl font-sans leading-6 flex gap-8 items-center font-medium">
                    <Link className="hidden min-md:flex hover:opacity-70 transition-all duration-500 ease-in-out" to="/"><p>Home</p></Link>
                    <Link className="hidden min-md:flex hover:opacity-70 transition-all duration-500 ease-in-out" to="/AboutMe"><p>About</p></Link>
                    <Link className="hidden min-md:flex hover:opacity-70 transition-all duration-500 ease-in-out" to=""><button onClick={() => {
  const element = document.getElementById('my-section');
  element?.scrollIntoView({
    behavior: 'smooth'
  }); 
}}>Contact</button></Link>

                </div>
            </div>
        </header>
    )
}
