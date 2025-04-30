import { useState } from "react";

const heroImg = "https://ext.same-assets.com/840999185/3569193189.jpeg";
const mapImg = "https://ext.same-assets.com/840999185/3599194450.jpeg";
const planImg = "https://ext.same-assets.com/840999185/823713638.jpeg";
const southsideImg = "https://ext.same-assets.com/840999185/657004960.png";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="bg-[#0e1413] min-h-screen font-sans">
            <header className="flex items-center justify-between px-8 py-4 bg-[#0e1413] border-b border-[#232324]/60 relative">
                <div className="flex items-center gap-4">
                    <img src="/mercedes-benz-logo.webp" alt="Mercedes Logo" className="h-14" />
                </div>
                <nav className="hidden md:flex gap-6 text-[#dbd9d5] text-sm font-medium">
                    <a href="#amenities" className="hover:underline">Amenities</a>
                    <a href="#floorplans" className="hover:underline">Floor Plans</a>
                    <a href="#renderings" className="hover:underline">Renderings</a>
                    <a href="#deposit" className="hover:underline">Deposit Structure</a>
                    <a href="#facts" className="hover:underline">Fact Sheet</a>
                </nav>
                <button
                    className="bg-white text-[#0e1413] px-5 py-2 rounded tracking-tight font-semibold border border-[#dbd9d5] transition hover:bg-[#dbd9d5] hidden md:block"
                    onClick={() => setShowModal(true)}
                >
                    SCHEDULE A VISIT
                </button>
                <button
                    className="md:hidden flex flex-col items-center justify-center w-8 h-8 border border-gray-600 rounded focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open mobile menu"
                >
                    <div className="w-5 h-0.5 bg-[#dbd9d5] mb-1"></div>
                    <div className="w-5 h-0.5 bg-[#dbd9d5] mb-1"></div>
                    <div className="w-5 h-0.5 bg-[#dbd9d5]"></div>
                </button>
                {/* Mobile nav */}
                {menuOpen && (
                    <div className="mobile-nav absolute top-full left-0 w-full bg-[#131514] py-8 z-50 flex flex-col">
                        <a href="#amenities" className="text-[#dbd9d5] text-lg py-2" onClick={() => setMenuOpen(false)}>Amenities</a>
                        <a href="#floorplans" className="text-[#dbd9d5] text-lg py-2" onClick={() => setMenuOpen(false)}>Floor Plans</a>
                        <a href="#renderings" className="text-[#dbd9d5] text-lg py-2" onClick={() => setMenuOpen(false)}>Renderings</a>
                        <a href="#deposit" className="text-[#dbd9d5] text-lg py-2" onClick={() => setMenuOpen(false)}>Deposit Structure</a>
                        <a href="#facts" className="text-[#dbd9d5] text-lg py-2" onClick={() => setMenuOpen(false)}>Fact Sheet</a>
                        <button
                            className="bg-white text-[#0e1413] px-5 py-2 mt-5 rounded tracking-tight font-semibold border border-[#dbd9d5] transition hover:bg-[#dbd9d5]"
                            onClick={() => {
                                setShowModal(true);
                                setMenuOpen(false);
                            }}
                        >
                            SCHEDULE A VISIT
                        </button>
                    </div>
                )}
            </header>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 relative animate-fade-in">
                        <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-black text-2xl"
                            onClick={() => setShowModal(false)}
                            aria-label="Close Schedule Modal"
                        >
                            &times;
                        </button>
                        <h2 className="font-heading text-2xl font-bold mb-6 text-[#0e1413]">Schedule a Visit</h2>
                        <form className="flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3f566c]"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3f566c]"
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3f566c]"
                            />
                            <textarea
                                placeholder="Message"
                                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3f566c]"
                                rows={3}
                            ></textarea>
                            <button type="submit" className="bg-[#0e1413] text-white py-2 rounded mt-3 hover:bg-[#3f566c] transition">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Hero/Main Image */}
            <div className="w-full aspect-[2.1/1] bg-black flex justify-center items-center">
                <img src={heroImg} alt="Mercedes Benz Residences Miami" className="object-cover w-full h-full" />
            </div>

            {/* Intro/Description */}
            <section className="max-w-4xl mx-auto text-center py-12 px-3">
                <h1 className="text-white font-bold text-xl tracking-widest mb-3 font-heading">MERCEDES BENZ PLACES</h1>
                <h2 className="text-[#dbd9d5] font-semibold text-lg mb-5 font-heading">A VISIONARY MIAMI DEVELOPMENT</h2>
                <p className="text-[#dbd9d5] text-base mb-3">
                    Embracing timeless design principles and urban Miami influence, Mercedes-Benz Places presents the vision of luxury. With advanced engineering, boundary-breaking features, and a future-forward aesthetic, Mercedes-Benz delivers an unparalleled place to call home, blurring the lines between luxury living, technology, and community bonding.
                </p>
                <p className="text-[#dbd9d5] text-base mb-3">
                    Seamlessly VFF Experience Coming Soon, Mercedes-Benz Places is a collective collaboration driven by vision. The synthesis of effortless elegance, Miami’s vibrant culture, and world-class design ensures a residence where every moment inspires.
                </p>
                <p className="text-[#dbd9d5] text-base">
                    The result of world-renowned engineering, boundary-pushing architectural expression, premium art-filled interiors, integrated services, and cutting-edge technology, these homes deliver a lifestyle and ownership proposition unlike anything else in Miami.
                </p>
            </section>

            {/* Map & Info Section */}
            <section className="bg-[#111214] py-10 flex flex-col md:flex-row gap-10 justify-center items-start px-3">
                <div className="flex-1 flex flex-col gap-6 items-center">
                    <img src={mapImg} alt="Mercedes Benz Miami Map" className="max-w-full rounded-md" />
                </div>
            </section>

            {/* Design Statement Section */}
            <section className="py-14 text-center bg-[#0e1413]">
                <div className="text-white text-3xl md:text-4xl font-light leading-tight tracking-wider font-heading">
                    Luxury Rooted in<br />Design, Technology,<br />Quality and Sustainability
                </div>
            </section>

            {/* Floor Plans Preview */}
            <section className="flex flex-col md:flex-row justify-center items-center gap-12 bg-[#0e1413] py-12">
                <img src={planImg} alt="Mercedes Benz Miami Floor Plan" className="rounded-lg shadow-lg max-w-md" />
                <img src={heroImg} alt="Mercedes Benz Miami Building" className="rounded-lg shadow-lg max-w-md" />
            </section>

            {/* Southside Park Section */}
            <section className="max-w-4xl mx-auto py-12 px-3 text-center">
                <img src={southsideImg} alt="Southside Park" className="mx-auto rounded-xl mb-6 max-h-96 object-cover" />
                <h3 className="text-lg text-white tracking-wider font-semibold mb-2 font-heading">SOUTHSIDE PARK</h3>
                <p className="text-[#dbd9d5] max-w-2xl mx-auto">
                    The newly designed Southside Park is the crown of the largest green space in Brickell, supporting community recreation and Miami’s urban vibrancy. The linked garden provides enhanced amenities for all ages, a truly significant addition to both local condominium residents and the greater Brickell community.
                </p>
            </section>

            {/* Footer navigation */}
            <footer className="bg-[#0e1413] text-[#dbd9d5] py-8 flex flex-col md:flex-row justify-between items-center border-t border-[#212121] text-xs px-6">
                <div className="flex flex-col md:flex-row gap-8 mb-4 md:mb-0">
                    <span>STUDIO</span>
                    <span>1 BEDROOM</span>
                    <span>2 BEDROOMS</span>
                    <span>3 BEDROOMS</span>
                </div>
                <div className="flex flex-col items-center">
                    <span>2024 COPYRIGHT</span>
                    <span>VON DER HEYDEN GROUP CONTACT</span>
                    <span>EXCLUSIVE BROKER</span>
                    <span>REAL ESTATE OFF</span>
                    <span>SOLJAMANCE DUE AT CLOSING</span>
                </div>
            </footer>
            <div className="bg-white py-6 px-6 flex flex-col md:flex-row justify-between items-center">
                <span className="text-lg font-bold text-[#0e1413] tracking-wider">CONTACT US</span>
                <span className="text-[#3a3b38] text-base tracking-wide flex items-center gap-2 mt-2 md:mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.5v9.75A2.25 2.25 0 004.5 19.5h15.75a2.25 2.25 0 002.25-2.25V7.5m-1.5-2.25A2.25 2.25 0 0019.5 3H4.5a2.25 2.25 0 00-2.25 2.25v1.5" />
                    </svg>
                    (305) 989-3308
                </span>
            </div>
        </div>
    );
}

export default App;
