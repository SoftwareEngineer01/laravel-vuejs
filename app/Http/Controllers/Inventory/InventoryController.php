<?php

namespace App\Http\Controllers\Inventory;

use App\Http\Controllers\ResponseApiController;
use Illuminate\Http\Request;
use App\Models\Inventory\Inventory;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class InventoryController extends ResponseApiController
{

    public function index()
    {
        $message = null;

        $inventories = Inventory::select('inventories.id', 'inventories.code', 'inventory_types.name as inventory_type',
                                         'suppliers.business_name as supplier', 'inventories.bill', 'inventories.model',
                                         'inventories.description', 'inventories.size', 'inventories.color', 'inventories.material',
                                         'inventories.group', 'inventories.units', 'inventories.outputs',
                                         'inventories.cost', 'inventories.value', 'inventories.minimum_value', 'inventories.created_at')
                                 ->join('inventory_types', 'inventories.inventory_type_id', '=', 'inventory_types.id')
                                 ->join('suppliers', 'inventories.supplier_id', '=', 'suppliers.id')
                                 ->orderBy('inventories.created_at', 'desc')
                                 ->get();

        try {
            if ($inventories->isEmpty()) {
                $message = $this->sendError('Error', ['No hay registros'], 422);
            }else {
                $message = $this->sendResponse($inventories, 'Se listan los registros correctamente');
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
            'code' => 'required|unique:inventories',
            'inventory_type_id' => 'required',
            'supplier_id' => 'required',
            'bill' => 'required',
            'description' => 'required',
            'units' => 'required',
            'cost' => 'required',
            'value' => 'required'
        ]);

        try {
            if ( $validated->fails() ) {
                $message = $this->sendError('Error de validación', [$validated->errors()], 422);
            }else {
                $inventory = new Inventory();
                $inventory->code = $request->get('code');
                $inventory->inventory_type_id = $request->get('inventory_type_id');
                $inventory->supplier_id = $request->get('supplier_id');
                $inventory->bill = $request->get('bill');
                $inventory->model = $request->get('model');
                $inventory->description = $request->get('description');
                $inventory->size = $request->get('size');
                $inventory->color = $request->get('color');
                $inventory->material = $request->get('material');
                $inventory->group = $request->get('group');
                $inventory->units = $request->get('units');
                $inventory->outputs = 0;
                $inventory->cost = $request->get('cost');
                $inventory->value = $request->get('value');
                $inventory->minimum_value = $request->get('minimum_value');
                $inventory->save();

                $message = $this->sendResponse($inventory, 'Registro agregado correctamente');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al agregar los datos o en la consulta'], 500);
        }

        return $message;

    }

    public function show($id)
    {
        $message = null;

        $inventory = Inventory::select('inventories.id', 'inventories.code', 'inventories.inventory_type_id', 'inventory_types.name as inventory_type',
                                        'inventories.supplier_id', 'suppliers.business_name as supplier', 'inventories.bill', 'inventories.model',
                                        'inventories.description', 'inventories.size', 'inventories.color', 'inventories.material',
                                        'inventories.group', 'inventories.units', 'inventories.outputs',
                                        'inventories.cost', 'inventories.value', 'inventories.minimum_value', 'inventories.created_at')
                                ->join('inventory_types', 'inventories.inventory_type_id', '=', 'inventory_types.id')
                                ->join('suppliers', 'inventories.supplier_id', '=', 'suppliers.id')
                                ->where('inventories.id', '=', $id)
                                ->first();

        if($inventory === null) {
            $message = $this->sendError('Error en la consulta', ['El registro no existe'], 422);
        } else {
            $message = $this->sendResponse($inventory, 'Registro encontrado');
        }

        return $message;
    }

    public function update(Request $request, $id)
    {
        $message = null;

        $validated = Validator::make($request->all(), [
            'inventory_type_id' => 'required',
            'supplier_id' => 'required',
            'bill' => 'required',
            'description' => 'required',
            'units' => 'required',
            'cost' => 'required',
            'value' => 'required',
        ]);

        try {

            $inventory = Inventory::find($id);

            if ( $validated->fails() ) {
                $message = $this->sendError('Error de validación', [$validated->errors()], 422);
            } elseif($inventory === null) {
                $message = $this->sendError('Error en la consulta', ['El registro no existe'], 422);
            }else {
                $inventory->inventory_type_id = $request->get('inventory_type_id');
                $inventory->supplier_id = $request->get('supplier_id');
                $inventory->bill = $request->get('bill');
                $inventory->model = $request->get('model');
                $inventory->description = $request->get('description');
                $inventory->size = $request->get('size');
                $inventory->color = $request->get('color');
                $inventory->material = $request->get('material');
                $inventory->group = $request->get('group');
                $inventory->units = $request->get('units');
                $inventory->final_units = $request->get('units');
                $inventory->cost = $request->get('cost');
                $inventory->value = $request->get('value');
                $inventory->minimum_value = $request->get('minimum_value');
                $inventory->save();

                $message = $this->sendResponse($inventory, 'Registro actualizado correctamente');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al actualizar los datos o en la consulta'], 500);
        }

        return $message;
    }


    public function destroy($id)
    {
        $message = null;

        $inventory = Inventory::find($id);

        if($inventory === null) {
            $message = $this->sendError('Error en la consulta', ['El registro no existe'], 422);
        } else {
            $inventory->delete();
            $message = $this->sendResponse($inventory, 'Registro eliminado correctamente');
        }

        return $message;
    }

      //Obtiene los inventarios por tipo inventario
      public function getInventories($id) {

        $message = null;

        $inventories = Inventory::where('inventory_type_id', $id)->get();

        try {
            if($inventories->isEmpty()){
                $message = $this->sendError('Error', ['No hay registros para ese tipo de inventario'], 422);
            }else {
                $message = $this->sendResponse($inventories, 'Registros encontrados');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al obtener los datos o en la consulta'], 500);
        }

        return $message;
    }

}
