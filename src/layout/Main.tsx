import Navigation from './partials/NavBar'

interface MainProps {
    children: React.ReactNode
}

export default function Main({ children }: MainProps) {
    return (
        <>
            <header className="bg-gray-200 p-8">
                <Navigation />
                <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
                    {children}
                </div>
            </header>
        </>
    )
}
