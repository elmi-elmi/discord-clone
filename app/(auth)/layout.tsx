import Link from "next/link";


export default function AuthLayout({children}: {children: React.ReactNode}){
    return (<>
    <main>
        <Link className="bg-blue-200 w-screen" href='/'>auth layout to home</Link>
        {children}
        </main> 
    </>)
}