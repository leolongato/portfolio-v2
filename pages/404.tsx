import Image from 'next/image';
import Link from 'next/link';
import { MdArrowDownward } from 'react-icons/md'

const Error404: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen md:flex-row-reverse">
            <Image src="/homer.png" alt="sad" width={200} height={230} />
        <div className="flex flex-col justify-center items-center md:mr-20">
            <div className="flex justify-center items-center mb-20" >
                <p className="text-9xl">4</p>
                <Image src="/donut-homer.png" alt="sad" width={130} height={130}/>
                <p className="text-9xl">4</p>
            </div>
            <p className="text-1xl mb-20 md:text-2xl">Esta página não existe ou foi excluída!</p>

            <MdArrowDownward size={32} className="animate-bounce"/>
                <Link href="/">
                    <a className="bg-blue-300 p-4 rounded hover:bg-blue-400">Voltar para o início</a>
                </Link>
        </div>
    </div>
    );
}

export default Error404;