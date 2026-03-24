import logo from "../assets/logo.webp";
import yarn from "../assets/yarn.webp";
import hook from "../assets/hook.webp";
import online from "../assets/online.webp";
import kits from "../assets/kits.webp";
import chunky from "../assets/Chunky.png";
import makes from "../assets/Makes.png";
import sale from "../assets/Sale.png";



export function Home() {
    return (
        <div>
            <section className="logo">
                <img src={logo} alt="Logo" />
            </section>
            <section className="card-grid">
                <div className="card">
                    <img src={yarn} alt="Yarn" />
                </div>

                <div className="card">
                    <img src={hook} alt="Hook" />
                </div>

                <div className="card">
                    <img src={online} alt="online" />
                </div>

                <div className="card">
                    <img src={kits} alt="Kits" />
                </div>

            </section>

            <section className="max-w-7xl mx-auto px-8 py-14">
                <h2 className="text-xl font-medium mb-6">Shop by collection</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="text-center">
                        <img src={chunky} alt="Chunky" className="rounded-2xl w-full h-100 object-cover" />
                        <p className="mt-3 text-sm">Chunky Yarn</p>
                    </div>

                    <div className="text-center">
                        <img src={makes} alt="Makes" className="rounded-2xl w-full h-100 object-cover" />
                        <p className="mt-3 text-sm">Our Makes</p>
                    </div>

                    <div className="text-center">
                        <img src={sale} alt="Sale" className="rounded-2xl w-full h-100 object-cover" />
                        <p className="mt-3 text-sm">Flash Sale</p>
                    </div>

                </div>
            </section>


        </div>
    );
}
