import {http} from './http_service';

export function createInventary(data) {
    return http().post('/inventory', data);
}

export function getInventary() {
    return http().get('/inventory');
}

export function getInventaryId(id) {
    return http().get(`inventory/${id}`);
}

export function getInventoriesByType(id) {
    return http().get(`inventoriesByType/${id}`);
}

export function updateInventary(id, data) {
    return http().post(`inventory/${id}`, data);
}

export function deleteInventary(id) {
    return http().delete(`inventory/${id}`);
}
