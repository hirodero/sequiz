import Header from "../components/ui/header";
export default function AppLayout ({title, children}){
    return(
        <div className="fixed inset-0 overflow-y-auto w-full h-dvh bg-[url('/assets/Desktop.png')] flex flex-col bg-cover">
            <Header/>
            <main className="h-dvh">
                {children}
            </main>
        </div>
    )
}