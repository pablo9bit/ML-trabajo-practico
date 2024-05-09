import { getList, getDetail } from '../services/getData';
import clienteAxios from '../config/axios';
import "@testing-library/jest-dom";

jest.mock('../config/axios');

describe('getList', () => {
  it('should call clienteAxios.get with correct searchParam', async () => {
    const searchParam = 'example';
    await getList(searchParam);
    expect(clienteAxios.get).toHaveBeenCalledWith(`/api/items/?q=${searchParam}`);
  });

  it('should return data.data on success', async () => {
    const mockData = { data: 'exampleData' };
    (clienteAxios.get as jest.Mock).mockResolvedValue(mockData);
    const result = await getList('example');
    expect(result).toEqual(mockData.data);
  });

  it('should return undefined on error', async () => {
    (clienteAxios.get as jest.Mock).mockRejectedValue(new Error('exampleError'));
    const result = await getList('example');
    expect(result).toBeUndefined();
  });
});

describe('getDetail', () => {
  it('should call clienteAxios.get with correct id', async () => {
    const id = 'exampleId';
    await getDetail(id);
    expect(clienteAxios.get).toHaveBeenCalledWith(`/api/items/${id}`);
  });

  it('should return data on success', async () => {
    const mockData = { data: 'exampleData' };
    (clienteAxios.get as jest.Mock).mockResolvedValue(mockData);
    const result = await getDetail('exampleId');
    expect(result).toEqual(mockData.data);
  });

  it('should return undefined on error', async () => {
    (clienteAxios.get as jest.Mock).mockRejectedValue(new Error('exampleError'));
    const result = await getDetail('exampleId');
    expect(result).toBeUndefined();
  });
});
