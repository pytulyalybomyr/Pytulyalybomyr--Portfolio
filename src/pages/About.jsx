export default function About() {
    const lang = ["Html", "CSS", "Java Script", "React", "FireBase", "Tailwind CSS", "Figma"]
    return (
        <main>
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

                                <div className="flex items-center gap-4">
                                <button className='rounded-[100px] w-[187px] h-[54px] bg-n1 text-black font-serif flex gap-[25px] items-center justify-center font-bold'>CONTACT ME <img src="dot.svg" alt="" /></button>
                                <button className='button--mini'><img src="linkedin.svg" alt="" /></button>
                                <button className='button--mini'><img src="github.svg" alt="" /></button>
                            </div>
                            </div>
                        </div>
                </div>
                <img className="!mt-20 m-auto w-[90%]" src="about_my--photo.png" alt="" />
            </section>
            <section>
            <div className="container max-w-[1240px] mx-auto mt-20">
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                            <h2 className="uppercase text-[42px] sm:text-[60px] lg:text-[76px]">My Capabilities</h2>
                            <div className="flex flex-col gap-6 sm:gap-[53px] items-start w-full lg:w-[704px]">
                                <div className="w-[600px] max-[600px]:w-[100%] flex flex-col items-start gap-[32px]">
                                    <p className="body--text">I always try to learn something new. I have intermediate knowledge in most environments. In the future, I want to understand the backend and become a full-stack developer.</p>
                                    <div className="flex flex-wrap gap-4">
                                        {lang.map((i) => (
                                            <button key={i} className="py-4 px-9 rounded-[100px] border-[2px] border-solid border-white uppercase  !text-white body--text">{i}</button>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </main>
    )
}
