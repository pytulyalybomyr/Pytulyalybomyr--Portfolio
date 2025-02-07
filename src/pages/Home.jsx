import Projects from '../components/Projects'

function App() {
    return (
        <>
            <main>
                <section>
                    <div className="container max-w-[1240px] mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between mt-[30px] gap-10">
                            <div className="flex flex-col gap-6 lg:gap-10 items-start min-[320px]:!items-center ">
                                <div className="flex flex-col gap-2 min-[320px]:!items-center">
                                    <h1 className="!text-[56px] sm:!text-[80px]  lg:!text-[99px] min-[320px]:!text-[40px]">
                                        Hi, I am Liubomyr Pytulya
                                    </h1>
                                    <p className="body--text max-w-[90%] sm:max-w-[544px] min-[320px]:text-center lg:!text-left">
                                        Ukrainian front-end developer from Lviv, passionate about creating accessible and user-friendly websites.
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <button className="rounded-[100px] w-[160px] sm:w-[187px] h-[54px] bg-n1 text-black font-serif flex gap-[15px] sm:gap-[25px] items-center justify-center font-bold">
                                        CONTACT ME <img src="dot.svg" alt="" />
                                    </button>
                                    <button className="button--mini"><img src="linkedin.svg" alt="" /></button>
                                    <button className="button--mini"><img src="github.svg" alt="" /></button>
                                </div>
                            </div>
                            <img className="w-[80%] sm:w-[60%] lg:w-[50%] h-auto rounded-[15px]" src="my--photo.png" alt="Liubomyr Pytulya" />
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-[#484848] my-10 sm:my-20"></div>
                </section>

                <Projects />

                <section>
                    <div className="container max-w-[1240px] mx-auto">
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                            <h1 className="uppercase text-[42px] sm:text-[60px] lg:text-[76px]">About me</h1>
                            <div className="flex flex-col gap-6 sm:gap-[53px] items-start w-full lg:w-[704px]">
                                <div className="flex flex-col gap-4">
                                    <h4>
                                        I am a front-end developer from Lviv, looking for exciting opportunities.
                                    </h4>
                                    <p className="!font-normal body--text">
                                        I am a front-end developer based in Lviv and currently studying at school. I love focusing on accessibility in web development and am passionate about problem-solving. Currently learning React.js, Tailwind CSS, and a bit of design. When not coding, I enjoy playing basketball. I am always eager to improve my skills.
                                    </p>
                                </div>

                                <li className="flex flex-col gap-1">
                                    <a href="/aboutMe" className="">
                                        <h6 className="!text-[#D3E97A] uppercase">More about me</h6>
                                    </a>
                                    <div className="w-full h-[1px] bg-[#D3E97A]"></div>
                                </li>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App;
