import client1 from "../assets/client1.webp";

export function Abouthome() {
    return (
        <section className="my-16 p-4 md:p-8">
            <div className="rounded-[80px] border border-gray-400 bg-white/40 p-10 md:p-14">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-14">
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl text-center text-gray-800 mb-4">
                        About Crochet Now India
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed text-xl font-extralight font-sans">
                        India’s no.1 yarn store established in 2017 where you can find
                        all your crochet and knitting essentials 🧶 Buy yarn and crochet
                        material from us for best prices.
                    </p>

                    <h4 className="font-semibold text-gray-700 mb-2 text-center">
                        About us:
                    </h4>

                    <p className="text-gray-600 mb-4 leading-relaxed text-xl font-extralight font-sans">
                        We sell Yarn and Accessories to fiber art enthusiasts across the
                        world. We also provide online classes to Crochet enthusiasts.
                    </p>

                    <p className="text-gray-600 mb-4 leading-relaxed text-xl font-extralight font-sans">
                        Our mission is to supply and make available all materials and
                        tools required for fiber arts that exist in the world.
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed text-xl font-extralight font-sans">
                        Our vision is to help people understand the value of art and how
                        creativity brings happiness to everyday life.
                    </p>

                    <h4 className="font-semibold text-gray-700 mb-2 text-center">
                        Highlights:
                    </h4>

                    <ul className="list-disc pl-5 text-gray-600 space-y-2 text-xl font-extralight font-sans">
                        <li>Featured on The Hindu and Cosmopolitan India.</li>
                        <li>20k+ customers with 5-star reviews.</li>
                        <li>9+ years of experience answering all yarnie doubts.</li>
                    </ul>
                </div>


                <div className="flex justify-center items-center">
                    <img src={client1} alt="client1" className="max-w-full rounded-2xl" />
                </div>
            </div>
            </div>
        </section>
    );

}
