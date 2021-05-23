import {http} from './http_service';

export function createInventaryType(data) {
    return http().post('/inventory_type', data);
}

export function getInventaryTypes() {
    return http().get('/inventory_types');
}

export function deleteInventaryType(id) {
    return http().delete(`inventory_type/${id}`);
}

export function updateInventaryType(id, data) {
    return http().post(`inventory_type/${id}`, data);
}
