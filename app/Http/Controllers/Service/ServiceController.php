<?php

namespace App\Http\Controllers\Service;

use App\Http\Controllers\ResponseApiController;
use Illuminate\Http\Request;
use App\Models\Service\Service;
use Illuminate\Support\Facades\Validator;

class ServiceController extends ResponseApiController
{

    public function index()
    {
        $message = null;

        $services = Service::select('services.id', 'services.code', 'suppliers.business_name as supplier', 'services.bill',
                                    'services.model', 'services.description', 'services.size', 'services.color', 'services.material',
                                    'services.group', 'services.cost', 'services.value', 'services.minimum_value', 'services.created_at')
                                 ->join('suppliers', 'services.supplier_id', '=', 'suppliers.id')
                                 ->orderBy('services.created_at', 'desc')
                                 ->get();

        try {
            if ($services->isEmpty()) {
                $message = $this->sendError('Error', ['No hay registros'], 422);
            }else {
                $message = $this->sendResponse($services, 'Se listan los registros correctamente');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($e->getMessage(), ['Error al obtener los datos o en la consulta'], 500);
        }

        return $message;
    }

    public function store(Request $request)
    {
        $message = null;

        $validated = Validator::make($request->all(), [
            'code' => 'required|unique:services',
            'supplier_id' => 'required',
            'description' => 'required',
            'cost' => 'required',
            'value' => 'required'
        ]);

        try {
            if ( $validated->fails() ) {
                $message = $this->sendError('Error de validación', [$validated->errors()], 422);
            }else {
                $service = new Service();
                $service->code = $request->get('code');
                $service->supplier_id = $request->get('supplier_id');
                $service->bill = $request->get('bill');
                $service->model = $request->get('model');
                $service->description = $request->get('description');
                $service->size = $request->get('size');
                $service->color = $request->get('color');
                $service->material = $request->get('material');
                $service->group = $request->get('group');
                $service->cost = $request->get('cost');
                $service->value = $request->get('value');
                $service->minimum_value = $request->get('minimum_value');
                $service->save();

                $message = $this->sendResponse($service, 'Registro agregado correctamente');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al agregar los datos o en la consulta'], 500);
        }

        return $message;
    }

    public function show($id)
    {
        $message = null;

        $service = Service::select('services.id', 'services.code', 'services.supplier_id', 'suppliers.business_name as supplier',
                                   'services.bill', 'services.model', 'services.description', 'services.size', 'services.color',
                                   'services.material', 'services.group', 'services.cost', 'services.value', 'services.minimum_value', 'services.created_at')
                                ->join('suppliers', 'services.supplier_id', '=', 'suppliers.id')
                                ->where('services.id', '=', $id)
                                ->first();

        if($service === null) {
            $message = $this->sendError('Error en la consulta', ['El registro no existe'], 422);
        } else {
            $message = $this->sendResponse($service, 'Registro encontrado');
        }

        return $message;
    }

    public function update(Request $request, $id)
    {
        $message = null;

        $validated = Validator::make($request->all(), [
            'supplier_id' => 'required',
            'bill' => 'required',
            'description' => 'required',
            'cost' => 'required',
            'value' => 'required',
        ]);

        try {

            $service = Service::find($id);

            if ( $validated->fails() ) {
                $message = $this->sendError('Error de validación', [$validated->errors()], 422);
            } elseif($service === null) {
                $message = $this->sendError('Error en la consulta', ['El registro no existe'], 422);
            }else {
                $service->supplier_id = $request->get('supplier_id');
                $service->bill = $request->get('bill');
                $service->model = $request->get('model');
                $service->description = $request->get('description');
                $service->size = $request->get('size');
                $service->color = $request->get('color');
                $service->material = $request->get('material');
                $service->group = $request->get('group');
                $service->cost = $request->get('cost');
                $service->value = $request->get('value');
                $service->minimum_value = $request->get('minimum_value');
                $service->save();

                $message = $this->sendResponse($service, 'Registro actualizado correctamente');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al actualizar los datos o en la consulta'], 500);
        }

        return $message;
    }

    public function destroy($id)
    {
        $message = null;

        $service = Service::find($id);

        if($service === null) {
            $message = $this->sendError('Error en la consulta', ['El registro no existe'], 422);
        } else {
            $service->delete();
            $message = $this->sendResponse($service, 'Registro eliminado correctamente');
        }

        return $message;
    }
}
