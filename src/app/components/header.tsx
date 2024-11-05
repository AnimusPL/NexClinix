import Image from 'next/image'

export default function Header() {
    return (
        <header className="flex flex-row align-center h-32 w-full shadow-sm shadow-gray-400 bg-white">
            <Image
                src="/images/logo-row.webp"
                width={600}
                height={500}
                alt="Picture of the author"
                className='object-contain'
            />
        </header>
    );
}