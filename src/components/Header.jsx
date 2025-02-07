import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <div className="flex justify-between items-center mx-[60px] my-8">
                <Link to="/"><h3 className="min-[320px]:hidden min-[768px]:flex flex min-[320px]:text-center text-[32px] font-display text-n2 leading-[150%] ">Lybomyr Pytulya</h3></Link>
                <div className="text-n2 text-1xl font-sans leading-6 flex gap-8 items-center font-medium">
                    <Link className="hidden min-md:flex" to=""><p>Home</p></Link>
                    <Link className="hidden min-md:flex" to="/AboutMe"><p>About</p></Link>
                    <Link className="hidden min-md:flex" to=""><p>Contact</p></Link>

                </div>
            </div>
        </header>
    )
}
