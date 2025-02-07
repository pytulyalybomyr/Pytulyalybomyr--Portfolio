export default function About() {
    const lang = ["Html", "CSS", "Java Script", "React", "FireBase", "Tailwind CSS", "Figma"]
    return (
        <main>
            <section>
                <div className="container mt-[160px]">
                    <div className="flex justify-between items-start">
                        <h1 className="uppercase">About me</h1>
                        <div className="flex flex-col gap-[53px] items-start w-[704px]">
                            <div className="flex flex-col gap-4 items-start">
                                <h4>My name is Lyubomyr and I am 14 years old. I am from Ukraine</h4>
                                <p className="!font-normal body--text">My name is Lyubomyr and I am 14 years old. I am always trying to learn something new. I have intermediate knowledge in most environments. In the future, I want to understand the backend and become a full-stack developer.</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className='rounded-[100px] w-[187px] h-[54px] bg-n1 text-black font-serif flex gap-[25px] items-center justify-center font-bold'>CONTACT ME <img src="dot.svg" alt="" /></button>
                                <button className='button--mini'><img src="linkedin.svg" alt="" /></button>
                                <button className='button--mini'><img src="github.svg" alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <img className="my-30" src="about_my--photo.png" alt="" />
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="flex items-center justify-between gap-20">
                        <div className="">
                            <h2 className="uppercase">My Capabilities</h2>
                        </div>
                        <div className="w-[600px] flex flex-col items-start gap-[32px]">
                            <p className="body--text">I always try to learn something new. I have intermediate knowledge in most environments. In the future, I want to understand the backend and become a full-stack developer.</p>
                            <div className="flex flex-wrap gap-4">
                                {lang.map((i) => (
                                    <button key={i} className="py-4 px-9 rounded-[100px] border-[2px] border-solid border-white uppercase  !text-white body--text">{i}</button>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
