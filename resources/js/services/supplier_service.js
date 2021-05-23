import {http} from './http_service';

export function createSupplier(data) {
    return http().post('/supplier', data);
}

export function getSuppliers() {
    return http().get('/supplier');
}

export function getSupplierId(id) {
    return http().get(`supplier/${id}`);
}

export function updateSupplier(id, data) {
    return http().post(`supplier/${id}`, data);
}

export function deleteSupplier(id) {
    return http().delete(`supplier/${id}`);
}

