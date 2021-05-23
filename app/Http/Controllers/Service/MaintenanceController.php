<?php

namespace App\Http\Controllers\Service;

use App\Http\Controllers\ResponseApiController;
use Illuminate\Http\Request;
use App\Models\Service\Maintenance;
use Illuminate\Support\Facades\Validator;

class MaintenanceController extends ResponseApiController
{

    public function index()
    {
        $message = null;

        $maintenances = Maintenance::select('maintenances.id', 'customers.name as customer', 'maintenances.description',
                                         'inventories.description as inventory','maintenances.created_at')
                                 ->join('customers', 'maintenances.customer_id', '=', 'customers.id')
                                 ->join('inventories', 'maintenances.inventory_id', '=', 'inventories.id')
                                 ->orderBy('inventories.created_at', 'desc')
                                 ->get();

        try {
            if ($maintenances->isEmpty()) {
                $message = $this->sendError('Error', ['No hay registros'], 422);
            }else {
                $message = $this->sendResponse($maintenances, 'Se listan los registros correctamente');
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
            'customer_id' => 'required',
            'inventory_id' => 'required',
            'description' => 'required'
        ]);

        try {
            if ($validated->fails() ) {
                $message = $this->sendError('Error de validación', [$validated->errors()], 422);
            }else {
                $maintenance = new Maintenance();
                $maintenance->customer_id = $request->get('customer_id');
                $maintenance->inventory_id = $request->get('inventory_id');
                $maintenance->description = $request->get('description');
                $maintenance->save();

                $message = $this->sendResponse($maintenance, 'Registro agregado correctamente');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al agregar los datos o en la consulta'], 500);
        }

        return $message;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        $message = null;

        $maintenance = Maintenance::find($id);

        if($maintenance === null) {
            $message = $this->sendError('Error en la consulta', ['El registro no existe'], 422);
        } else {
            $maintenance->delete();
            $message = $this->sendResponse($maintenance, 'Registro eliminado correctamente');
        }

        return $message;
    }
}
