export default function Projects() {
    const data = [
        {
            id: 1,
            name: 'Flower-Shop',
            description: 'Flower Shop - Flowers for any event - an online React flower shop with CMS, shopping cart, and Firebase authentication. The administrator can manage products, and users can conveniently choose and buy them.',
            url__github: 'https://github.com/pytulyalybomyr/Flower-Shop',
            url__web: 'https://flower-shop-nine-puce.vercel.app',
            info: [
                { main: 'Year', text: '2024' },
                { main: 'Role', text: 'Full-Stack Developer' }
            ],
            type: 'React'
        },
        {
            id: 2,
            name: 'Cozy-House',
            description: 'Cozy House is a responsive pet shelter website built with HTML, CSS (SCSS), and JavaScript. It features a structured Flexbox and Grid layout, smooth animations, and dynamic UI components like a slider and modal windows.',
            url__github: 'https://github.com/pytulyalybomyr/Cozy-House',
            url__web: 'https://cozy-house-ochre.vercel.app',
            info: [
                { main: 'Year', text: '2022' },
                { main: 'Role', text: 'Front-end Developer' }
            ],
            type: 'HTML, CSS, JavaScript'
        },
        {
            id: 3,
            name: 'Simply-chocolate',
            description: 'Simply Chocolate is a responsive landing page built with HTML, CSS (SCSS), and JavaScript. It utilizes Flexbox and Grid for layout structuring, with CSS and JS animations for enhanced user interaction.',
            url__github: 'https://github.com/pytulyalybomyr/SIMPLY-CHOCOLATE',
            url__web: 'https://simply-chocolate.vercel.app',
            info: [
                { main: 'Year', text: '2022' },
                { main: 'Role', text: 'Front-end Developer' }
            ],
            type: 'HTML, CSS, JavaScript'
        },
    ];

    return (
        <section className="px-10 md:px-20 lg:px-40">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">FEATURED PROJECTS</h2>
                    <p className="body--text mt-2">Here are some of the selected projects that showcase my passion for front-end development.</p>
                </div>
                <div className="mt-16 space-y-20">
                    {data.map((project) => (
                        <div key={project.id} className="flex flex-col md:flex-row items-center gap-10">
                            <div className="w-full md:w-[600px] h-[400px] bg-[#1A1A1A] rounded-xl flex items-center justify-center relative">
                                <button className="bg-black text-white px-4 py-2 text-sm font-medium rounded-full absolute top-4 left-4 uppercase">
                                    {project.type}
                                </button>
                                <img className="w-5/6 rounded-xl" src={`project/${project.name}.jpg`} alt={project.name} />
                            </div>
                            <div className="w-full md:w-[576px]">
                                <h4 className="text-xl font-semibold">{project.name}</h4>
                                <p className="text-gray-300 mt-2">{project.description}</p>
                                <div className="mt-6">
                                    <h5 className="uppercase text-sm font-bold">Project Info</h5>
                                    <div className="space-y-2 mt-2">
                                        {project.info.map((i) => (
                                            <div key={i.main} className="flex justify-between border-b border-gray-700 py-1">
                                                <h6 className="text-gray-400">{i.main}</h6>
                                                <p className="text-white">{i.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                 <div className="mt-6">
                                        <ul className="flex items-center gap-6">
                                            <li className="flex items-stretch flex-col gap-1">
                                                <a href={project.url__web} className="flex items-center gap-2">
                                                <h6 className="!text-[#D3E97A] uppercase group-hover:underline hover:!text-white underline-offset-9 transition-all duration-300 ease-in-out">
                                            LIve demo
                                        </h6>
                                                    <img src="arrow--top.svg" alt="" />
                                                </a>
                                                
                                            </li>
                                            <li className="flex items-stretch flex-col gap-1">
                                                <a href={project.url__github} className="flex items-center gap-2">
                                                <h6 className="!text-[#D3E97A] uppercase group-hover:underline hover:!text-white underline-offset-9 transition-all duration-300 ease-in-out">
                                            See on github
                                        </h6>
                                                    <img src="github.svg" alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#484848] my-20"></div>
        </section>
    );
}
