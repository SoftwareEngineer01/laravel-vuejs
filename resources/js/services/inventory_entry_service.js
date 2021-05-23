import {http} from './http_service';

export function createInventoryEntry(data) {
    return http().post('/inventory_entry', data);
}

export function getInventoryEntries() {
    return http().get('/inventory_entry');
}

export function getInventoryEntryId(id) {
    return http().get(`inventory_entry/${id}`);
}

export function updateInventoryEntry(id, data) {
    return http().post(`inventory_entry/${id}`, data);
}

export function deleteInventoryEntry(id) {
    return http().delete(`inventory_entry/${id}`);
}
