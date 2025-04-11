'use client'; 
import { useRouter } from 'next/navigation';
import { useCsvUpload } from '../src/app/hooks/useCsvUpload';

export default function HomePageDashboard() {
  const router = useRouter();
  const { products, loading, error, uploadCsvFile } = useCsvUpload();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) uploadCsvFile(file);
  };

  return (
    <>
        <div className="flex w-full h-screen overflow-hidden">
            <div className="hidden bg-indigo-500 sm:flex sm:w-1/4 sm:h-full md:w-1/5 lg:w-1/6 xl:w-[15%] 2xl:w-1/10 justify-between flex-col">
                <div className="flex flex-col items-center pt-8 w-full gap-12 2xl:pt-12">
                    <h1 className="fade-title flex font-normal text-white cursor-pointer" onClick={() => router.push('/dashboard')}>Uploads</h1>
                    <h1 className="fade-title flex font-normal text-white cursor-pointer" onClick={() => router.push('/dashboard')}>Settings</h1>
                </div>
                <div className='flex flex-col items-center pb-6'>
                    <h1 className="fade-title flex font-normal text-white cursor-pointer" onClick={() => router.push('/dashboard')}>Dashboard</h1>
                </div>
            </div>
            <div className='flex w-full'>
                <div className='flex w-full flex-col pt-6 pl-6 pr-6 sm:pt-8 sm:pl-12 lg:pt-8 lg:pl-16 2xl:pt-12'>
                    <h1 className='flex w-full font-normal text-indigo-500 text-base'>Welcome, dear User.</h1>
                    <h1 className='flex w-full pt-6 text-indigo-500 text-base'>Insert below your csv file to convert:</h1>
                    <input
                        type="file"
                        accept=".csv"
                        onChange={handleFileChange}
                        className="
                            pt-10
                            text-sm text-gray-600
                            file:mr-4 file:py-2 file:px-4
                            file:rounded file:border-0
                            file:text-sm file:font-semibold
                            file:bg-indigo-500 file:text-white
                            hover:file:bg-indigo-600"
                        />
                {loading && <p className="mt-4 text-indigo-600">⌛ Processando arquivo...</p>}
                 {error && <p className="mt-4 text-red-500">{error}</p>}
                {products.length > 0 && (
                    <div className="mt-6 overflow-auto">
                    <table className="w-full border text-sm text-indigo-800 bg-white shadow-md rounded">
                        <thead className="bg-indigo-100 border-b">
                        <tr>
                            <th className="p-2 text-left">Name</th>
                            <th>Expiration</th>
                            <th>USD</th>
                            <th>EUR</th>
                            <th>BRL</th>
                            <th>GBP</th>
                            <th>CAD</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b">
                            <td className="p-2">{product.name}</td>
                            <td>{new Date(product.expiration).toLocaleDateString()}</td>
                            <td>${product.price_usd.toFixed(2)}</td>
                            <td>€{product.price_eur.toFixed(2)}</td>
                            <td>R${product.price_brl.toFixed(2)}</td>
                            <td>£{product.price_gbp.toFixed(2)}</td>
                            <td>C${product.price_cad.toFixed(2)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                )}
                </div>         
            </div>
        </div>
    </>
  );
}
