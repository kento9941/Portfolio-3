import Header from "@/components/header/header";
import { awards } from "@/stores/awards-store";
import { socials } from "@/stores/socials-store";

export default function Bio() {
    return (
        <main className="w-screen h-screen landscape:pt-[40vh] landscape:px-[2rem]">
            <Header />

            <div className="flex landscape:justify-between">
                {/* Bio */}
                <div className="w-[40vw] flex flex-col">
                    <h2 className="bold-text grey-text mb-[2vh]">BIO</h2>
                    <div>
                        <p>I am a creative developer and design engineer currently studying IT at Adelaide University.</p>
                        <p>Driven by a lens of spatial design and technical precision, I craft immersive digital experiences that live at the intersection of cinematic visual motion and robust infrastructure.</p>
                        <p>My process is deeply rooted in software design principles. I strive to find seamless logic in a clean, highly optimized codebase just as much as I value the beauty of the browser.</p>
                    </div>
                </div>

                <div className="landscape:w-[40vw] flex flex-col gap-[10vh]">
                    {/* Awards */}
                    <div>
                        <h2 className="bold-text grey-text mb-[2vh]">AWARDS</h2>
                        {awards.map((award, i) => (
                            <div key={i} className="flex">
                                <p className="w-[3vw]">{award.times}</p>
                                <p className="w-[10vw]">{award.name}</p>
                                <p>{award.title}</p>
                            </div>
                        ))}
                    </div>

                    {/* Availability */}
                    <div>
                        <h2 className="bold-text grey-text mb-[2vh]">AVAILABILITY</h2>
                        <p>Based in Adelaide, Australia.</p>
                        <p>Available for freelance, contract work, and creative collaborations.</p>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col items-start">
                        <h2 className="bold-text grey-text mb-[2vh]">SOCIALS</h2>
                        <div className="flex gap-[4rem]">
                            {socials.map((media, i) => (
                                <a
                                    key={i}
                                    href={media.href}
                                    aria-label={media.text}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    {media.text}
                                </a>
                            ))}
                            <a
                                href="mailto:kento9941@gmail.com"
                                aria-label="Send an email to Kento Kawazoe"
                                className="link"
                            >
                                kento9941@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
