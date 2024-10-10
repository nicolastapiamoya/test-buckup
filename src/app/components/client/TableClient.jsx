import Link from "next/link";
import * as IconLu from "react-icons/lu";
import DeleteButtonServer from "./DeleteButtonServer";
export default function TableClient({ client }) {

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
                        <th className="px-4 py-1 font-semibold">Rut</th>
                        <th className="px-4 py-1 font-semibold">Email</th>
                        <th className="px-4 py-1 font-semibold">Telefono</th>
                        <th className="px-4 py-1 font-semibold">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {client ? client.map((item, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-1 text-sm text-center">{item.id_client}</td>
                            <td className="border px-4 py-1 text-sm">{item.name}</td>
                            <td className="border px-4 py-1 text-sm">{item.adress}</td>
                            <td className="border px-4 py-1 text-sm">{item.dni}</td>
                            <td className="border px-4 py-1 text-sm">{item.email}</td>
                            <td className="border px-4 py-1 text-sm">{item.telephone}</td>
                            <td className="border px-4 py-1 text-sm">{item.status}</td>
                            <td className="border px-4 py-1">
                                <Link href={`/administrator/client/${item.id_client}`}>
                                    <div className="bg-celeste hover:bg-hover-celeste text-white font-bold py-1 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                        <IconLu.LuEye />
                                    </div>
                                </Link>
                            </td>
                            <td className="border px-4 py-1">
                                <DeleteButtonServer id_client={item.id_client}></DeleteButtonServer>
                            </td>
                        </tr>
                    )): <>Sin data</>}
                </tbody>
            </table>
        </div>
    );
};