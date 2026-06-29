import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { awards } from "@/stores/awards-store";
import { socials } from "@/stores/socials-store";

export default function Bio() {
    return (
        <main className="w-screen h-screen landscape:pt-[50vh] landscape:px-[2rem]">
            <Header />
            <Footer />

            <div className="flex landscape:justify-between">
                {/* Bio */}
                <div className="w-[35vw] flex flex-col gap-[3vh]">
                    <h2 className="bold-text grey-text">BIO</h2>
                    <div>
                        <p>Kento Kawazoe is a design engineer and a student at Adelaide University.</p>
                        <p>Currently based in Adelaide, Australia, he crafts immersive digital experiences through a lens of spatial design and technical precision.</p>
                        <p>He enjoys shaping interactive spaces built upon robust, highly optimized architectures.</p>
                        <p className="mt-[1rem]">Since late 2025, when he discovered just how beautiful the web could be, he has been on a journey exploring the boundaries of the browser.</p>
                        <p>His process remains deeply rooted in software design principles, driving him to find seamless logic in a clean codebase just as much as in cinematic visual motion.</p>
                    </div>
                </div>

                {/* Awards */}
                <div>
                    <h2 className="bold-text grey-text mb-[3vh]">AWARDS</h2>
                    {awards.map((award, i) => (
                        <div key={i} className="flex">
                            <p className="w-[3vw]">{award.times}</p>
                            <p className="w-[10vw]">{award.name}</p>
                            <p>{award.title}</p>
                        </div>
                    ))}
                </div>

                {/* Socials */}
                <div className="w-[10vw] flex flex-col">
                    <h2 className="bold-text grey-text mb-[3vh]">SOCIALS</h2>
                    {socials.map((media, i) => (
                        <a key={i} href={media.href} aria-label={media.text} target="_blank" rel="noopener noreferrer">
                            {media.text}
                        </a>
                    ))}
                    <a href="mailto:kento9941@gmail.com" aria-label="Send an email to Kento Kawazoe">
                        kento9941@gmail.com
                    </a>
                </div>
            </div>
        </main>
    )
}
