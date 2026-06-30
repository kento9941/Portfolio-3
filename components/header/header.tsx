'use client'
 
import { usePathname  } from 'next/navigation'
import Link from "next/link";

const Header = () => {
    const pathname = usePathname ();
    return (
        <>
            <Link
                href="/"
                className="bold-text fixed top-0 left-0 ml-[2rem] mt-[1rem] z-100"
                style={{display: pathname === "/" ? "none" : "block"}}
            >
                KENTO KAWAZOE
            </Link>

            <div className="bold-text fixed top-0 right-0 mr-[2rem] mt-[1rem] flex gap-[2rem] z-100">
                <HeaderButton href="/bio" text="BIO" />
                <HeaderButton href="/works" text="WORKS" />
                <HeaderButton href="/blogs" text="BLOGS" />
                <HeaderButton href="/artwroks" text="ARTWORKS" />
                <HeaderButton href="/contact" text="CONTACT" />
            </div>
        </>
    )
}

interface HeaderButtonProps {
    href: string,
    text: string,
}

const HeaderButton = ({ href, text }: HeaderButtonProps) => {
    return (
        <Link href={href} className="link">
            {text}
        </Link>
    )
}

export default Header;