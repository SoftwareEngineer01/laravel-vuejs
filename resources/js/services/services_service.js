import {http} from './http_service';

export function createService(data) {
    return http().post('/service', data);
}

export function getServices() {
    return http().get('/service');
}

export function getServiceId(id) {
    return http().get(`service/${id}`);
}

export function updateService(id, data) {
    return http().post(`service/${id}`, data);
}

export function deleteService(id) {
    return http().delete(`service/${id}`);
}
