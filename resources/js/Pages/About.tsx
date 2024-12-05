import Layout from "@/Layouts/Layout";

function About() {
    return (
        <Layout>
            <div className="main__container">
                <div className="grid md:grid-cols-3 xl:grid-cols-4">
                    <h3 className="text-coklat text-[24px] font-bold">
                        About us
                    </h3>
                    <div className="col-span-2 xl:col-span-3">
                        <h1 className="text-[35px] md:text-[50px]  leading-[50px] text-coklat font-bold font-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque beatae nobis maiores eligendi assumenda
                            repellat doloremque qui distinctio ipsa esse optio
                            officiis nam earum commodi nulla cumque quis sequi
                            numquam explicabo deserunt molestiae a,
                        </h1>
                        <p className="text-2xl mt-6">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Cupiditate cumque hic inventore vitae magnam
                            in quidem aliquam repellat velit sequi voluptas
                            culpa provident perspiciatis rem, possimus, id
                            exercitationem tenetur eaque.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <img src="hero.jpg" alt="" />
                    <img src="hero.jpg" alt="" />
                    <img src="hero.jpg" alt="" />
                </div>
            </div>
        </Layout>
    );
}

export default About;
