
import Link from "next/link";
import * as IconLu from "react-icons/lu";

export default function ListCategoryTable() {

    const lists = [
        {
            id_list_category: 1,
            name: 'lista de categorias promo verano mujer 40%',
            description: 'lista de categorías para promoción de un 40% en las categorias poleras mujer, ropa interior mujer, pantalones mujer'
        }
    ]

    return (
        <div className='overflow-x-auto'>
            <table className="table-fixed mb-3 mt-5 inline-block">
                <thead>
                    <tr className="border-solid border-2">
                        <th className="px-4 py-1 font-semibold inline-block ml-5">#ID</th>
                        <th className="px-4 py-1 font-semibold">Nombre</th>
                        <th className="px-4 py-1 font-semibold">Descripción</th>
                        <th className="px-4 py-1 font-semibold"></th>
                    </tr>
                </thead>
                <tbody>
                    {lists.map((list, index) => (
                        <tr key={`${list.id_list_category}-${index}`}>
                            <td className="border px-4 py-1 text-sm">{list.id_list_category}</td>
                            <td className="border px-4 py-1 text-sm">{list.name}</td>
                            <td className="border px-4 py-1 text-sm">{list.description}</td>
                            <td className="border px-4 py-1">
                                <Link href={`/administrator/categories/list/1`}>
                                    <div className="bg-celeste hover:bg-hover-celeste text-white font-bold py-1 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                        <IconLu.LuEye />
                                    </div>
                                </Link>
                            </td>
                            <td className="border px-4 py-1">
                                <Link href={`#`}>
                                    <div className="bg-naranja hover:bg-orange-300 text-white font-bold py-1 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                        <IconLu.LuTrash />
                                    </div>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
