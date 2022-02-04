import Link from "next/link"

// import Link => carregamento da página mais rapido

export default function Page404() {
    return (
        <div>
            
           <h1>Voce se perdeu e caiu na página 404 :O</h1>
           <Link  href="/">
           <a> Ir para a Home </a> 
           </Link>
        </div>
    )
}