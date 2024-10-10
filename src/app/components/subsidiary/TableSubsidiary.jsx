import Link from "next/link";
import * as IconLu from "react-icons/lu";
export default function TableSubsidiary({ subsidiary }) {

    return (
        <div className='overflow-x-auto'>
            <div className="mb-1 ml-2 mr-2 mt-5">
                <input className="shadow appearance-none border rounded text-sm w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search_brands" type="text" placeholder="Buscar..." />
            </div>
            <table className="table-fixed mb-3 mt-5 inline-block">
                <thead>
                    <tr className="border-solid border-2">
                        <th className="px-4 py-1 font-semibold inline-block ml-5">#id</th>
                        <th className="px-4 py-1 font-semibold">Nombre</th>
                        <th className="px-4 py-1 font-semibold">Dirección</th>
                    </tr>
                </thead>
                <tbody>
                    {subsidiary.map((item, index) => (
                        <tr key={item.id}>
                            <td className="border px-4 py-1 text-sm text-center">{item.id_sucursal}</td>
                            <td className="border px-4 py-1 text-sm">{item.name}</td>
                            <td className="border px-4 py-1 text-sm">{item.adress}</td>
                            <td className="border px-4 py-1">
                                <Link href={`/administrator/subsidiary/${item.id_sucursal}`}>
                                    <div className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-celeste hover:bg-hover-celeste text-white font-bold py-1 px-4 rounded-full">
                                        <IconLu.LuEye />
                                    </div>
                                </Link>
                            </td>
                            <td className="border px-4 py-1">
                                <button className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-naranja hover:bg-orange-300 text-white font-bold py-1 px-4 rounded-full">
                                    <IconLu.LuTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};