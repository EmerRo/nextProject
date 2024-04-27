import Users from "@/components/User"


export const metadata = {
    title: "mi pagina especial",
    description: "mi pagina especial"
}
export default function HomePage(){
// server component
    return <section>
{/* client component */}
        <Users/>
    </section>
}