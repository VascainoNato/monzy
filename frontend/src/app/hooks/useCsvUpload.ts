'use client';
import { useState } from 'react';
import axios from 'axios';
import { Product } from '../../../types/types';

export const useCsvUpload = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploadId, setUploadId] = useState('');
  const [error, setError] = useState('');

  const uploadCsvFile = async (file: File) => {
    setLoading(true);
    setError('');
    setProducts([]);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await axios.post('/api/uploads', formData);
      const { uploadId } = res.data;
      setUploadId(uploadId);

      // Await the worker
      setTimeout(async () => {
        const productRes = await axios.get(`/api/products?uploadId=${uploadId}`);
        setProducts(productRes.data);
        setLoading(false);
      }, 4000);
    } catch{
      setError('Erro ao processar o arquivo.');
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    error,
    uploadId,
    uploadCsvFile,
  };
};
