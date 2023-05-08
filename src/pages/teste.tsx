import Image from "next/image"
import loading from '../../public/img/loading.gif'

export default function teste(){
    return(
        <div className={`
            flex justify-center items-center h-screen
        `}>
            <Image src={loading} alt="Carregando"/>
        </div>
    )
}